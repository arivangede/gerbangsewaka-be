import { Module } from '@nestjs/common';
import { PolePointService } from './pole-point.service';
import { PolePointController } from './pole-point.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ZoneModule } from 'src/zone/zone.module';
import { FunctionModule } from 'src/function/function.module';
import { DistrictModule } from 'src/district/district.module';
import { GroupModule } from 'src/group/group.module';

@Module({
  imports: [
    PrismaModule,
    ZoneModule,
    FunctionModule,
    DistrictModule,
    GroupModule,
  ],
  providers: [PolePointService],
  controllers: [PolePointController],
})
export class PolePointModule {}
