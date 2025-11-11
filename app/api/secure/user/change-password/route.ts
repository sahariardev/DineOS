import {NextResponse} from 'next/server';
import { PrismaClient } from '@/app/generated/prisma/client';
import {hashPassword, verifyPassword} from "@/lib/util";

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {

        const userId = 1;
        const {oldPassword, newPassword, confirmPassword} = await request.json();

        if (!oldPassword || !newPassword || !confirmPassword) {
            return NextResponse.json({error: 'All password fields are required'}, {status: 400});
        }
        if (newPassword !== confirmPassword) {
            return NextResponse.json({error: 'New passwords do not match'}, {status: 400});
        }
        if (newPassword.length < 8) {
            return NextResponse.json({error: 'Password must be at least 8 characters long'}, {status: 400});
        }

        const user = await prisma.user.findUnique({
            where: {id: userId},
        });

        if (!user) {
            return NextResponse.json({error: 'User not found'}, {status: 404});
        }

        const isOldPasswordValid = verifyPassword(oldPassword, user.passwordHash);
        if (!isOldPasswordValid) {
            return NextResponse.json({error: 'Incorrect old password'}, {status: 403});
        }

        const newPasswordHash = hashPassword(newPassword);

        await prisma.user.update({
            where: {id: userId},
            data: {passwordHash: newPasswordHash},
        });

        return NextResponse.json({message: 'Password changed successfully'}, {status: 200});

    } catch (error: any) {
        if (error.message.includes('token')) {
            return NextResponse.json({error: error.message}, {status: 401});
        }
        console.error('Change Password API Error:', error);
        return NextResponse.json({error: 'Internal server error'}, {status: 500});
    }
}