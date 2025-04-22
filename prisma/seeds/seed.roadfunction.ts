import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function roadFunctionSeeder(): Promise<string | null> {
  const existing = await prisma.roadFunction.findFirst();
  if (existing) return null; // skip seeder if data already exists

  const roles = ['arterial', 'collector', 'local'];

  await prisma.roadFunction.createMany({
    data: roles.map((name) => ({ name })),
  });

  return 'road-function'; // return the name of the seeder for logging
}
