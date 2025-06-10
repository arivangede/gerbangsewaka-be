import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function functionSeeder(): Promise<string | null> {
  const existing = await prisma.function.findFirst();
  if (existing) return null; // skip seeder if data already exists

  const fungsi = [
    'Titik Nol',
    'Simpang',
    'Panel',
    'Lingkungan',
    'Fasosum',
    'Wisata',
    'Arteri',
    'Kolektor A',
    'Kolektor B',
  ];

  await prisma.function.createMany({
    data: fungsi.map((name) => ({ name })),
  });

  return 'function'; // return the name of the seeder for logging
}
