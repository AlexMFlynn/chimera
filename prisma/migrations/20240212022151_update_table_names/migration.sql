/*
  Warnings:

  - You are about to drop the `tasks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users_login_data` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "UserId";

-- DropForeignKey
ALTER TABLE "users_login_data" DROP CONSTRAINT "userId";

-- DropTable
DROP TABLE "tasks";

-- DropTable
DROP TABLE "users";

-- DropTable
DROP TABLE "users_login_data";

-- CreateTable
CREATE TABLE "task" (
    "taskId" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,
    "UserId" UUID NOT NULL,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("taskId")
);

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL,
    "firstName" VARCHAR(100) NOT NULL,
    "lastName" VARCHAR(100) NOT NULL,
    "dateOfBirth" DATE,
    "gender" CHAR(1),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_login_data" (
    "userId" UUID NOT NULL,
    "loginName" VARCHAR(50) NOT NULL,
    "passwordHash" VARCHAR(255) NOT NULL,
    "passwordSalt" VARCHAR(100) NOT NULL,
    "hashAlgorithmId" INTEGER NOT NULL,
    "emailAdress" VARCHAR(100) NOT NULL,
    "confirmationToken" VARCHAR(100),
    "tokenGenerationTime" TIMESTAMP(6),
    "emailValidationStatusId" INTEGER NOT NULL,
    "passwordRecoveryToken" VARCHAR(100),
    "recoveryTokenTime" TIMESTAMP(6),

    CONSTRAINT "user_login_data_pkey" PRIMARY KEY ("userId")
);

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "UserId" FOREIGN KEY ("UserId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_login_data" ADD CONSTRAINT "id" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
