-- CreateTable
CREATE TABLE "UserAreaAccess" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "areaId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAreaAccess_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserAreaAccess" ADD CONSTRAINT "UserAreaAccess_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAreaAccess" ADD CONSTRAINT "UserAreaAccess_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
