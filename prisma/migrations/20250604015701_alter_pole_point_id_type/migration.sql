/*
  Warnings:

  - The primary key for the `PolePoint` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `type` to the `PolePoint` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PolePoint" DROP CONSTRAINT "PolePoint_pkey",
ADD COLUMN     "type" "PolePointType" NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "PolePoint_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "PolePoint_id_seq";
