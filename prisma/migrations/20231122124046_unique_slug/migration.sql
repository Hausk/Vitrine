/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Work` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Work_title_key";

-- CreateIndex
CREATE UNIQUE INDEX "Work_slug_key" ON "Work"("slug" DESC);
