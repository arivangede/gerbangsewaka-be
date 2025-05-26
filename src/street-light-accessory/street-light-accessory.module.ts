import { Module } from '@nestjs/common';
import { StreetLightAccessoryController } from './street-light-accessory.controller';
import { StreetLightAccessoryService } from './street-light-accessory.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [StreetLightAccessoryController],
  providers: [StreetLightAccessoryService],
  exports: [StreetLightAccessoryService],
})
export class StreetLightAccessoryModule {}
