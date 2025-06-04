/*
  Warnings:

  - You are about to drop the column `areaId` on the `UserAreaAccess` table. All the data in the column will be lost.
  - You are about to drop the `Area` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Lamp` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RoadFunction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StreetLight` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StreetLightAccessory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StreetLightGroup` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `districtId` to the `UserAreaAccess` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PolePointType" AS ENUM ('STREET_LIGHT', 'PANEL');

-- DropForeignKey
ALTER TABLE "Lamp" DROP CONSTRAINT "Lamp_streetlighting_id_fkey";

-- DropForeignKey
ALTER TABLE "StreetLight" DROP CONSTRAINT "StreetLight_group_id_fkey";

-- DropForeignKey
ALTER TABLE "StreetLight" DROP CONSTRAINT "StreetLight_roadfunction_id_fkey";

-- DropForeignKey
ALTER TABLE "StreetLightAccessory" DROP CONSTRAINT "StreetLightAccessory_streetlighting_id_fkey";

-- DropForeignKey
ALTER TABLE "StreetLightGroup" DROP CONSTRAINT "StreetLightGroup_area_id_fkey";

-- DropForeignKey
ALTER TABLE "UserAreaAccess" DROP CONSTRAINT "UserAreaAccess_areaId_fkey";

-- AlterTable
ALTER TABLE "UserAreaAccess" DROP COLUMN "areaId",
ADD COLUMN     "districtId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Area";

-- DropTable
DROP TABLE "Lamp";

-- DropTable
DROP TABLE "RoadFunction";

-- DropTable
DROP TABLE "StreetLight";

-- DropTable
DROP TABLE "StreetLightAccessory";

-- DropTable
DROP TABLE "StreetLightGroup";

-- DropEnum
DROP TYPE "StreetLightStatus";

-- CreateTable
CREATE TABLE "Zone" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Zone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Function" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Function_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "District" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "District_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PolePoint" (
    "id" SERIAL NOT NULL,
    "streetName" TEXT NOT NULL,
    "poleCode" TEXT NOT NULL,
    "power" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "zoneId" INTEGER NOT NULL,
    "functionId" INTEGER NOT NULL,
    "districtId" INTEGER NOT NULL,
    "groupId" INTEGER NOT NULL,

    CONSTRAINT "PolePoint_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserAreaAccess" ADD CONSTRAINT "UserAreaAccess_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PolePoint" ADD CONSTRAINT "PolePoint_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PolePoint" ADD CONSTRAINT "PolePoint_functionId_fkey" FOREIGN KEY ("functionId") REFERENCES "Function"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PolePoint" ADD CONSTRAINT "PolePoint_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PolePoint" ADD CONSTRAINT "PolePoint_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
