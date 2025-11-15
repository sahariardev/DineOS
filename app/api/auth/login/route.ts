import {NextResponse} from 'next/server';
import jwt from 'jsonwebtoken';
import {serialize} from 'cookie';
import {verifyPassword} from "@/lib/util";
import { prisma } from "@/lib/prisma";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is not set. Please set it in .env.local');
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {email: email, storeName, password} = body;

        if (!email || !storeName || !password) {
            return NextResponse.json({error: 'All fields are required'}, {status: 400});
        }

        const store = await prisma.store.findUnique({
            where: {name: storeName},
        });

        if (!store) {
            return NextResponse.json({error: 'Invalid credentials'}, {status: 401});
        }


        const user = await prisma.user.findUnique({
            where: {
                email_store: {
                    email: email,
                    storeId: store.id,
                },
            },
        });

        if (!user) {
            return NextResponse.json({error: 'Invalid credentials'}, {status: 401});
        }

        const isPasswordValid = verifyPassword(password, user.passwordHash);

        if (!isPasswordValid) {
            return NextResponse.json({error: 'Invalid credentials'}, {status: 401});
        }

        // 5. Password is valid. Create a session token (JWT)
        const token = jwt.sign(
            {
                userId: user.id,
                email: user.email,
                storeId: store.id,
                storeName: store.name
            },
            JWT_SECRET,
            {expiresIn: '1d'} // 1-day expiry
        );


        const cookie = serialize('authToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            maxAge: 60 * 60 * 24, // 1 day in seconds
        });

        return NextResponse.json(
            {message: 'Login successful'},
            {
                status: 200,
                headers: {'Set-Cookie': cookie},
            }
        );

    } catch (error) {
        console.error('Login API Error:', error);
        return NextResponse.json({error: 'Internal server error'}, {status: 500});
    }
}