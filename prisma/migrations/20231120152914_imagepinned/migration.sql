/*
  Warnings:

  - You are about to drop the column `pinnedImage` on the `Work` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "pinnedImage" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Work" DROP COLUMN "pinnedImage";
