import { PrismaClient } from '@prisma/client';

export async function Command<R>(query: (prisma: PrismaClient) => R ) : Promise<R> {
    const prisma = new PrismaClient();

    try {
        return await query(prisma);
    } catch (error) {
        console.log(error)
        throw error;
    } finally {
        prisma.$disconnect();
    }
};

