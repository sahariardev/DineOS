import {compareSync, genSaltSync, hashSync} from 'bcryptjs';
import {Store} from "@/app/generated/prisma/client";
import {PrismaClient} from "@prisma/client";

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