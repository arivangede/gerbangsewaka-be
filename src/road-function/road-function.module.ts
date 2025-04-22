import { Module } from '@nestjs/common';
import { RoadFunctionService } from './road-function.service';
import { RoadFunctionController } from './road-function.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [RoadFunctionService, PrismaService],
  controllers: [RoadFunctionController],
})
export class RoadFunctionModule {}
