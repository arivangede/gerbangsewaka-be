import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './lib/filters/all-exceptions.filter';
import * as hbs from 'handlebars';
import * as fs from 'fs';
import { join } from 'path';

const layoutsPath = join(__dirname, 'mail', 'templates', 'layouts');
if (fs.existsSync(layoutsPath)) {
  fs.readdirSync(layoutsPath).forEach((file) => {
    const name = `${file.replace('.hbs', '')}`;
    const content = fs.readFileSync(join(layoutsPath, file), 'utf-8');
    hbs.registerPartial(name, content);
  });
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'https://your-frontend-domain.com',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });

  app.setGlobalPrefix('api');
  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
