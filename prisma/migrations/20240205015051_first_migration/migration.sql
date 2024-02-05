-- CreateTable
CREATE TABLE "tasks" (
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
CREATE TABLE "users" (
    "userId" UUID NOT NULL,
    "firstName" VARCHAR(100) NOT NULL,
    "lastName" VARCHAR(100) NOT NULL,
    "dateOfBirth" DATE,
    "gender" CHAR(1),

    CONSTRAINT "users_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "users_login_data" (
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
ALTER TABLE "tasks" ADD CONSTRAINT "UserId" FOREIGN KEY ("UserId") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_login_data" ADD CONSTRAINT "userId" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
