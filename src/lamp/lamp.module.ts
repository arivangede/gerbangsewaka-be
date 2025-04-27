import { Module } from '@nestjs/common';
import { LampController } from './lamp.controller';
import { LampService } from './lamp.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LampController],
  providers: [LampService],
  exports: [LampService]
})
export class LampModule {}
