/*
  Warnings:

  - You are about to drop the column `area_id` on the `StreetLighting` table. All the data in the column will be lost.
  - You are about to drop the column `group` on the `StreetLighting` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "StreetLighting" DROP CONSTRAINT "StreetLighting_area_id_fkey";

-- AlterTable
ALTER TABLE "StreetLighting" DROP COLUMN "area_id",
DROP COLUMN "group",
ADD COLUMN     "group_id" INTEGER;

-- CreateTable
CREATE TABLE "StreetLightingGroup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "area_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StreetLightingGroup_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StreetLighting" ADD CONSTRAINT "StreetLighting_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "StreetLightingGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StreetLightingGroup" ADD CONSTRAINT "StreetLightingGroup_area_id_fkey" FOREIGN KEY ("area_id") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
