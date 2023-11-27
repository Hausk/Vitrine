'use server';
import prisma from '@/utils/prisma';
import { join } from 'path';
import { writeFile } from 'fs/promises';

export async function upload(data: FormData) {
  const workId = ''
  const userId = data.get('userId') as string;
  const file: File | null = data.get('file') as unknown as File
  if (!file) {
    throw new Error('No file uploaded')
  }
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  // With the file data in the buffer, you can do whatever you want with it.
  // For this, we'll just write it to the filesystem in a new location
  const pathToFile = join('', 'public/images', file.name)
  await writeFile(pathToFile, buffer)
  await prisma.image.create({
    data: {
      workId: '',
      userId: '',
      path: '/images/' + file.name,
    }
  })

  return { success: true }
}

