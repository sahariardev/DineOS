import {NextResponse} from 'next/server';
import {hashPassword} from "@/lib/util";
import {prisma} from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {email: email, storeName, password, firstName, lastName} = body;

        if (!email || !storeName || !password) {
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
                    email: email,
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
                email: email,
                passwordHash: passwordHash,
                storeId: store.id,
                firstName: firstName,
                lastName: lastName,
            },
        });

        return NextResponse.json({
            id: user.id,
            email: user.email,
            storeId: user.storeId,
        }, {status: 201});

    } catch (error) {
        console.error('Registration API Error:', error);
        return NextResponse.json({error: 'Internal server error'}, {status: 500});
    }
}