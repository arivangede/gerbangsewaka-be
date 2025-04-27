import { Module } from '@nestjs/common';
import { StreetLightController } from './street-light.controller';
import { StreetLightService } from './street-light.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [StreetLightController],
  providers: [StreetLightService],
  exports: [StreetLightService]
})
export class StreetLightModule {}
