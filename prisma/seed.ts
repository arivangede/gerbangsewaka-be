import { PrismaClient } from '@prisma/client';
import runAllSeeders from './seeds';

const prisma = new PrismaClient();

async function main() {
  try {
    const logs = await runAllSeeders();
    logs.forEach((log) => console.log(log));

    console.log('🌱 Seeding complete.');
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    console.log('💔 Disconnected from database.');
  }
}

void main();
