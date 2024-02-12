/*
  Warnings:

  - You are about to drop the column `emailAdress` on the `user_login_data` table. All the data in the column will be lost.
  - Added the required column `emailAddress` to the `user_login_data` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_login_data" DROP COLUMN "emailAdress",
ADD COLUMN     "emailAddress" VARCHAR(100) NOT NULL;
