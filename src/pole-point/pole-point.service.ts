import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePolePointDto } from './dto/create-pole.dto';
import { UpdatePolePointDto } from './dto/update-pole.dto';

@Injectable()
export class PolePointService {
  constructor(private readonly prisma: PrismaService) {}

  getAll = async () => {
    return this.prisma.polePoint.findMany({});
  };

  getById = async (id: string) => {
    const polePoint = await this.prisma.polePoint.findUnique({
      where: {
        id,
      },
    });

    if (!polePoint) {
      throw new NotFoundException('Pole Point not found.');
    }

    return polePoint;
  };

  create = async (data: CreatePolePointDto) => {
    return this.prisma.polePoint.create({
      data,
    });
  };

  update = async (id: string, data: UpdatePolePointDto) => {
    const polePoint = await this.getById(id);

    return this.prisma.polePoint.update({
      where: {
        id: polePoint.id,
      },
      data,
    });
  };

  remove = async (id: string) => {
    const polePoint = await this.getById(id);

    return this.prisma.polePoint.delete({
      where: {
        id: polePoint.id,
      },
    });
  };
}
