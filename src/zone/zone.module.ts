import { Module } from '@nestjs/common';
import { ZoneService } from './zone.service';
import { ZoneController } from './zone.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ZoneService],
  controllers: [ZoneController],
  exports: [ZoneService],
})
export class ZoneModule {}
