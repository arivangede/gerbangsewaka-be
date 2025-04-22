import { Module } from '@nestjs/common';
import { StreetLightController } from './street-light.controller';
import { StreetLightService } from './street-light.service';

@Module({
  controllers: [StreetLightController],
  providers: [StreetLightService]
})
export class StreetLightModule {}
