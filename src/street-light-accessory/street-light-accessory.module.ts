import { Module } from '@nestjs/common';
import { StreetLightAccessoryController } from './street-light-accessory.controller';
import { StreetLightAccessoryService } from './street-light-accessory.service';

@Module({
  controllers: [StreetLightAccessoryController],
  providers: [StreetLightAccessoryService]
})
export class StreetLightAccessoryModule {}
