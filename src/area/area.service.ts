import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@Injectable()
export class AreaService {
  constructor(private readonly prisma: PrismaService) {}

  getAllAreas = async () => {
    const areas = await this.prisma.area.findMany({
      include: {
        streetLightGroup: true,
      },
    });

    if (!areas.length) {
      throw new NotFoundException('No areas found');
    }

    return areas;
  };

  getAreaById = async (id: string) => {
    const area = await this.prisma.area.findFirst({
      where: { id },
      include: {
        streetLightGroup: true,
      },
    });

    if (!area) {
      throw new NotFoundException(`Area with ID ${id} not found`);
    }

    return area;
  };

  createArea = async (data: CreateAreaDto) => {
    const area = await this.prisma.area.create({
      data,
      include: {
        streetLightGroup: true,
      },
    });

    return area;
  };

  updateArea = async (id: string, data: UpdateAreaDto) => {
    const exists = await this.prisma.area.findUnique({
      where: { id },
    });

    if (!exists) {
      throw new NotFoundException(`Area with ID ${id} not found`);
    }

    const updatedArea = await this.prisma.area.update({
      where: { id },
      data,
      include: {
        streetLightGroup: true,
      },
    });

    return updatedArea;
  };

  deleteArea = async (id: string) => {
    const area = await this.prisma.area.findUnique({
      where: { id },
      include: {
        streetLightGroup: true,
      },
    });

    if (!area) {
      throw new NotFoundException(`Area with ID ${id} not found`);
    }

    if (area.streetLightGroup.length > 0) {
      throw new NotFoundException(
        `Cannot delete area with ID ${id} because it still has street light groups associated with it`,
      );
    }

    return this.prisma.area.delete({
      where: { id },
      include: {
        streetLightGroup: true,
      },
    });
  };
}
