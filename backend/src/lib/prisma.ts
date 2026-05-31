// Importing Prisma Client
import { PrismaClient } from "@prisma/client";

// Declaring a global variable
declare global {
    var prisma: PrismaClient | undefined;
}

const prisma: PrismaClient = globalThis.prisma ?? new PrismaClient();
globalThis.prisma = prisma;

export default prisma

