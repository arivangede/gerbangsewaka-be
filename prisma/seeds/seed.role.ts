import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function roleSeeder(): Promise<string | null> {
  const existing = await prisma.role.findFirst();
  if (existing) return null; // skip seeder if data already exists

  const roles = [
    'admin',
    'client',
    'technician',
    'superadmin',
    'supervisor',
    'manager',
    'user',
  ];

  await prisma.role.createMany({
    data: roles.map((name) => ({ name })),
  });

  return 'role'; // return the name of the seeder for logging
}
