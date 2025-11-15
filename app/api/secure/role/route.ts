import {NextResponse} from "next/server";
import {getLoggedInUser, getUser, isRoleAdmin, isSystemUser} from "@/lib/util";
import {prisma as prismaClient} from "@/lib/prisma";
import {UnauthorizedAccess, ValidationError, WebSecurityException} from "@/lib/customError";
import {logger} from "@/lib/logger";

export async function POST(req: Request) {
    return await handleRequest(req, async (req) => {
        const {userId, permissionIds} = await getRequestBodyAndCheckSanity(req);
        const dataToCreate = permissionIds.map((pid: string) => ({
            userId: userId,
            permissionId: pid,
        }));

        const result = await prismaClient.userPermission.createMany({
            data: dataToCreate,
            skipDuplicates: true,
        });

        return NextResponse.json(result, {status: 201});
    });
}

export async function DELETE(request: Request) {
    return await handleRequest(request, async (request) => {
        const removedPermissions: string[] = [];
        const {userId, permissionIds} = await getRequestBodyAndCheckSanity(request);
        try {
            for (const pid of permissionIds) {

                try {
                    await prismaClient.userPermission.delete({
                        where: {
                            userId_permissionId: {
                                userId: userId,
                                permissionId: pid,
                            },
                        },
                    });

                    removedPermissions.push(pid);
                } catch (error) {

                }
            }

            return NextResponse.json(
                {message: 'Permission removed successfully ' + removedPermissions.join(', ')},
                {status: 200}
            );
        } catch (error) {
            logger.error('Error removing permission from user:', error);
            return NextResponse.json(
                {error: 'Internal server error'},
                {status: 500}
            );
        }
    });
}

async function getRequestBodyAndCheckSanity(req: Request) {
    const loggedInUser = await getLoggedInUser(req);

    if (!isSystemUser(loggedInUser) && !isRoleAdmin(loggedInUser)) {
        throw new UnauthorizedAccess("User need permission to perform this action");
    }

    const body = await req.json();
    const {userId, permissionIds} = body;

    if (!userId || !permissionIds) {
        throw new ValidationError('UserID and permissionIds required');
    }

    if (!isSystemUser(loggedInUser) && isRoleAdmin(loggedInUser)) {
        const requestedUser = await getUser(userId);

        if (requestedUser.store.id !== loggedInUser.store.id) {
            throw new WebSecurityException("User need permission to perform this action");
        }
    }

    return {
        userId: userId,
        permissionIds: permissionIds,
    }
}

async function handleRequest(req: Request, requestHandler: (req: Request) => Promise<NextResponse>) {
    try {
        return await requestHandler(req);
    } catch (error) {
        logger.error('something went wrong', error);
        if (error instanceof ValidationError) {
            const e = error as ValidationError;
            return NextResponse.json(
                {error: e.message,},
                {status: e.statusCode}
            );
        } else if (error instanceof WebSecurityException) {
            const e = error as ValidationError;
            return NextResponse.json(
                {error: e.message,},
                {status: e.statusCode}
            );
        } else if (error instanceof UnauthorizedAccess) {
            const e = error as ValidationError;
            return NextResponse.json(
                {error: e.message,},
                {status: e.statusCode}
            );
        } else {
            return NextResponse.json(
                {error: 'Internal server error'},
                {status: 500}
            );
        }
    }
}