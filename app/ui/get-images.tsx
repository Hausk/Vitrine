'use server'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getImageById(id: number) {
    const image = await prisma.image.findUnique({
        where: {
            id,
        },
    });
    return image;
}