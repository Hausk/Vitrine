'use server'

import prisma from "@/utils/prisma"

export async function createWork(formData: FormData) {
    await prisma.work.create({
      data: {
        slug: '' as string,
        title: formData.get('title') as string,
        userId: '1' as string,
      }
    })
    return { success: true }
}
  
export async function updateWork(formData: FormData) {
    await prisma.work.update({
        where: {
            id: formData.get('id') as string,
        },
        data: {
            title: formData.get('title') as string,
        }
    })
    return { success: true }
}
export async function deleteWork(formData: FormData) {
    console.log(formData.get('id'))
    await prisma.work.delete({
        where: {
            id: formData.get('id') as string,
        }
    })
    return { success: true }
}
export async function getAllWorks() {
    return await prisma.work.findMany();
}
export async function getPublishedWorks() {
    return await prisma.work.findMany({
        include: {
            image: {
                where: {
                    pinnedImage: true,
                }
            }
        },
        where: {
            image: {
                some: {
                    pinnedImage: true,
                }
            }
        },
    })
}
export async function getRelatedImages(slug: string) {
    const images =  await prisma.work.findUnique({
        where: {
          slug: slug,
        },
    }).image();
    return images ?? []
}