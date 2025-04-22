/*
  Warnings:

  - The primary key for the `RoadFunction` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `RoadFunction` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `roadfunction_id` on the `StreetLighting` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "StreetLighting" DROP CONSTRAINT "StreetLighting_roadfunction_id_fkey";

-- AlterTable
ALTER TABLE "RoadFunction" DROP CONSTRAINT "RoadFunction_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "RoadFunction_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "StreetLighting" DROP COLUMN "roadfunction_id",
ADD COLUMN     "roadfunction_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "StreetLighting" ADD CONSTRAINT "StreetLighting_roadfunction_id_fkey" FOREIGN KEY ("roadfunction_id") REFERENCES "RoadFunction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
