import {compareSync, genSaltSync, hashSync} from 'bcryptjs';
import {PrismaClient} from "@prisma/client";
import {User} from "@/lib/types";

const SALT_ROUNDS = 12;

/**
 * Hashes a plain-text password.
 * @param password The plain-text password to hash.
 * @returns The hashed password.
 */
export function hashPassword(password: string): string {
    const salt = genSaltSync(SALT_ROUNDS);
    return hashSync(password, salt);
}

/**
 * Verifies a plain-text password against a stored hash.
 * @param plainTextPassword The plain-text password from user input.
 * @param hash The stored password hash from the database.
 * @returns True if the password is correct, false otherwise.
 */
export function verifyPassword(plainTextPassword: string, hash: string): boolean {
    return compareSync(plainTextPassword, hash);
}

export async function getUserStore(request: Request) {
    const prisma = new PrismaClient();

    const userId = request.headers.get('x-user-id');
    const userWithStore = await prisma.user.findUnique({
        where: {id: userId},
        include: {store: true},
    });

    if (!userWithStore) {
        throw new Error('User not found');
    }

    return userWithStore;
}

export async function getLoggedInUser(request: Request, prisma: PrismaClient) {
    const userId = request.headers.get('x-user-id');


    const userWithStore = await prisma.user.findUnique({
        where: {id: userId},
        include: {store: true, permissions: true},
    })

    if (!userWithStore) {
        throw new Error('User not found');
    }

    console.log(`Logged in:`, userWithStore);

    return userWithStore;
}

export async function getUser(userId: string, prisma: PrismaClient): Promise<User> {
    const userWithStore = await prisma.user.findUnique({
        where: {id: userId},
        include: {store: true, permissions: true},
    })

    if (!userWithStore) {
        throw new Error('User not found');
    }

    console.log(`Logged in:`, userWithStore);

    return userWithStore;
}

export function isSystemUser(user: User) {
    return user.store.name === 'System'
}

export function isRoleAdmin(user: User) {
    return user.permissions.map(p => p.permission.name).includes('ROLE_ADMIN');
}