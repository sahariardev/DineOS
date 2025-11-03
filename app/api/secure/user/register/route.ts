import {NextResponse} from 'next/server';
import {PrismaClient} from '@prisma/client';
import {hashPassword} from "@/lib/util";

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {usermail, storeName, password} = body;

        if (!usermail || !storeName || !password) {
            return NextResponse.json({error: 'Email, store name, and password are required'}, {status: 400});
        }

        const store = await prisma.store.findUnique({
            where: {name: storeName},
        });

        if (!store) {
            return NextResponse.json({error: `Store '${storeName}' not found`}, {status: 404});
        }

        const existingUser = await prisma.user.findUnique({
            where: {
                email_store: {
                    email: usermail,
                    storeId: store.id,
                },
            },
        });

        if (existingUser) {
            return NextResponse.json({error: 'User with this email already exists in this store'}, {status: 409});
        }


        const passwordHash = hashPassword(password);

        const user = await prisma.user.create({
            data: {
                email: usermail,
                passwordHash: passwordHash,
                storeId: store.id,
            },
        });

        return NextResponse.json({
            id: user.id,
            email: user.email,
            role: user.role,
            storeId: user.storeId,
        }, {status: 201});

    } catch (error) {
        console.error('Registration API Error:', error);
        return NextResponse.json({error: 'Internal server error'}, {status: 500});
    }
}