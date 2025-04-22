/*
  Warnings:

  - You are about to drop the `StreetLighting` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StreetLightingAccessory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StreetLightingGroup` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "StreetLightStatus" AS ENUM ('Active', 'Inactive', 'UnderMaintenance');

-- DropForeignKey
ALTER TABLE "Lamp" DROP CONSTRAINT "Lamp_streetlighting_id_fkey";

-- DropForeignKey
ALTER TABLE "StreetLighting" DROP CONSTRAINT "StreetLighting_group_id_fkey";

-- DropForeignKey
ALTER TABLE "StreetLighting" DROP CONSTRAINT "StreetLighting_roadfunction_id_fkey";

-- DropForeignKey
ALTER TABLE "StreetLightingAccessory" DROP CONSTRAINT "StreetLightingAccessory_streetlighting_id_fkey";

-- DropForeignKey
ALTER TABLE "StreetLightingGroup" DROP CONSTRAINT "StreetLightingGroup_area_id_fkey";

-- DropTable
DROP TABLE "StreetLighting";

-- DropTable
DROP TABLE "StreetLightingAccessory";

-- DropTable
DROP TABLE "StreetLightingGroup";

-- DropEnum
DROP TYPE "StreetLightingStatus";

-- CreateTable
CREATE TABLE "StreetLight" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "roadfunction_id" INTEGER NOT NULL,
    "group_id" INTEGER,
    "poleType" TEXT,
    "poleHeight" TEXT,
    "poleMaterial" TEXT,
    "status" "StreetLightStatus" NOT NULL,
    "location" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StreetLight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StreetLightGroup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "area_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StreetLightGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StreetLightAccessory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "streetlighting_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StreetLightAccessory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StreetLight" ADD CONSTRAINT "StreetLight_roadfunction_id_fkey" FOREIGN KEY ("roadfunction_id") REFERENCES "RoadFunction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StreetLight" ADD CONSTRAINT "StreetLight_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "StreetLightGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StreetLightGroup" ADD CONSTRAINT "StreetLightGroup_area_id_fkey" FOREIGN KEY ("area_id") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lamp" ADD CONSTRAINT "Lamp_streetlighting_id_fkey" FOREIGN KEY ("streetlighting_id") REFERENCES "StreetLight"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StreetLightAccessory" ADD CONSTRAINT "StreetLightAccessory_streetlighting_id_fkey" FOREIGN KEY ("streetlighting_id") REFERENCES "StreetLight"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
