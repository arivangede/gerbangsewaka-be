import path from 'path';
import fs from 'fs';

type SeederFunction = () => Promise<string | void>;

export default async function runAllSeeders() {
  const seedersDir = __dirname;
  const seeders = fs
    .readdirSync(seedersDir)
    .filter(
      (file) =>
        file.startsWith('seed.') && file.endsWith('.ts') && file !== 'index.ts',
    );

  const logs: string[] = [];

  for (const seeder of seeders) {
    const filePath = path.join(seedersDir, seeder);
    try {
      const seederModule = (await import(filePath)) as {
        default: SeederFunction;
      };
      const seederFn = seederModule.default;

      if (typeof seederFn !== 'function') {
        logs.push(`⚠️  ${seeder} does not export a default function.`);
        continue;
      }

      const result = await seederFn();
      if (result) {
        logs.push(`✅ Seeder "${result}" executed.`);
      } else {
        logs.push(`⚠️  Seeder "${seeder}" skipped (already exists).`);
      }
    } catch (error) {
      logs.push(`❌ Error running seeder "${seeder}": ${error}`);
    }
  }

  return logs;
}
