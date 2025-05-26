/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `UserVerificationToken` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserVerificationToken_token_key" ON "UserVerificationToken"("token");
