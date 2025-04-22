import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoadFunctionDto } from './dto/create-road-function.dto';
import { UpdateRoadFunctionDto } from './dto/update-road-function.dto';

@Injectable()
export class RoadFunctionService {
  constructor(private readonly prisma: PrismaService) {}

  getAllRoadFunctions = async () => {
    return this.prisma.roadFunction.findMany();
  };

  getRoadFunctionById = async (id: number) => {
    return this.prisma.roadFunction.findFirst({
      where: { id },
    });
  };

  createRoadFunction = async (data: CreateRoadFunctionDto) => {
    return this.prisma.roadFunction.create({
      data,
    });
  };

  updateRoadFunction = async (id: number, data: UpdateRoadFunctionDto) => {
    return this.prisma.roadFunction.update({
      where: { id },
      data,
    });
  };

  deleteRoadFunction = async (id: number) => {
    return this.prisma.roadFunction.delete({
      where: { id },
    });
  };
}
