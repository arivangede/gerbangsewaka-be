import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@Injectable()
export class AreaService {
  constructor(private readonly prisma: PrismaService) {}

  getAllAreas = async () => {
    return this.prisma.area.findMany();
  };

  getAreaById = async (id: string) => {
    return this.prisma.area.findFirst({
      where: { id },
    });
  };

  createArea = async (data: CreateAreaDto) => {
    return this.prisma.area.create({
      data,
    });
  };

  updateArea = async (id: string, data: UpdateAreaDto) => {
    return this.prisma.area.update({
      where: { id },
      data,
    });
  };

  deleteArea = async (id: string) => {
    return this.prisma.area.delete({
      where: { id },
    });
  };
}
