import { Module } from '@nestjs/common';
import { PolePointService } from './pole-point.service';
import { PolePointController } from './pole-point.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PolePointService],
  controllers: [PolePointController],
})
export class PolePointModule {}
