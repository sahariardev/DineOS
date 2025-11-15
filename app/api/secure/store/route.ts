import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {name, description, type} = body;

        const store = await prisma.store.create({
            data: {name, description, type},
        })

        return NextResponse.json({
            id: store.id,
            name: store.name,
            type: store.type,
        }, {status: 201});

    } catch (error) {
        console.error('Login API Error:', error);
        return NextResponse.json({error: 'Internal server error'}, {status: 500});
    }
}

export async function GET(req: Request) {
    try {
        const storeList = await prisma.store.findMany();

        return NextResponse.json({
            storeList
        }, {status: 200});

    } catch (error) {
        console.error('Login API Error:', error);
        return NextResponse.json({error: 'Internal server error'}, {status: 500});
    }
}