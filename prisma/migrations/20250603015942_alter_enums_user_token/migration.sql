/*
  Warnings:

  - The values [REGISTER,FORGOT_PASSWORD] on the enum `UserTokenTypes` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UserTokenTypes_new" AS ENUM ('EMAIL_VERIFICATION', 'PASSWORD_RESET');
ALTER TABLE "UserToken" ALTER COLUMN "type" TYPE "UserTokenTypes_new" USING ("type"::text::"UserTokenTypes_new");
ALTER TYPE "UserTokenTypes" RENAME TO "UserTokenTypes_old";
ALTER TYPE "UserTokenTypes_new" RENAME TO "UserTokenTypes";
DROP TYPE "UserTokenTypes_old";
COMMIT;
