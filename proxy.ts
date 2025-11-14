import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';
import jwt from "jsonwebtoken";

export async function proxy(req: NextRequest) {
    const token = req.cookies.get('authToken')?.value;

    if (!token) {
        return NextResponse.json({message: 'Unauthorized'}, {status: 401});
    }

    const user = verifyJwt(token);

    if (!user) {
        return NextResponse.json({message: 'Invalid token'}, {status: 401});
    }

    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('x-user-id', user.userId as string);

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });

    return response;
}

function verifyJwt(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET)
}

export const config = {
    matcher: ['/api/secure/:path*'],
};
