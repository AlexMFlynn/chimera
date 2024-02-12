/*
  Warnings:

  - You are about to drop the column `emailValidationStatusId` on the `user_login_data` table. All the data in the column will be lost.
  - You are about to drop the column `hashAlgorithmId` on the `user_login_data` table. All the data in the column will be lost.
  - You are about to drop the column `passwordSalt` on the `user_login_data` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user_login_data" DROP COLUMN "emailValidationStatusId",
DROP COLUMN "hashAlgorithmId",
DROP COLUMN "passwordSalt";
