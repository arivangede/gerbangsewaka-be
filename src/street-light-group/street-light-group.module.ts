import { Module } from '@nestjs/common';
import { StreetLightGroupController } from './street-light-group.controller';
import { StreetLightGroupService } from './street-light-group.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [StreetLightGroupController],
  providers: [StreetLightGroupService],
  exports: [StreetLightGroupService],
})
export class StreetLightGroupModule {}
