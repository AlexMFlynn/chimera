/*
  Warnings:

  - The primary key for the `task` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `task` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `task` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `task` table. All the data in the column will be lost.
  - Added the required column `taskId` to the `task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "task" DROP CONSTRAINT "Tasks_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "id",
DROP COLUMN "updatedAt",
ADD COLUMN     "taskId" UUID NOT NULL,
ADD CONSTRAINT "Tasks_pkey" PRIMARY KEY ("taskId");
