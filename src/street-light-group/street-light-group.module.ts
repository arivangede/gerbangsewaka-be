import { Module } from '@nestjs/common';
import { StreetLightGroupController } from './street-light-group.controller';
import { StreetLightGroupService } from './street-light-group.service';

@Module({
  controllers: [StreetLightGroupController],
  providers: [StreetLightGroupService]
})
export class StreetLightGroupModule {}
