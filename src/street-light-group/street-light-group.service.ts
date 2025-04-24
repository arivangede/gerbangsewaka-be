import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStreetLightGroupDto } from './dto/create-street-light-group.dto';
import { UpdateStreetLightGroupDto } from './dto/update-street-light-group.dto';

@Injectable()
export class StreetLightGroupService {
  constructor(private readonly prisma: PrismaService) {}

  getAllStreetLightGroups = async () => {
    const streetLightGroups = await this.prisma.streetLightGroup.findMany({
      include: {
        area: true,
        streetLight: true,
      },
    });

    if (!streetLightGroups.length) {
      throw new NotFoundException('No street light groups found');
    }

    return streetLightGroups;
  };

  getStreetLightGroupById = async (id: number) => {
    const streetLightGroup = await this.prisma.streetLightGroup.findFirst({
      where: { id },
      include: {
        area: true,
        streetLight: true,
      },
    });

    if (!streetLightGroup) {
      throw new NotFoundException(`Street light group with ID ${id} not found`);
    }

    return streetLightGroup;
  };

  createStreetLightGroup = async (data: CreateStreetLightGroupDto) => {
    const areaExists = await this.prisma.area.findUnique({
      where: { id: data.area_id },
    });

    if (!areaExists) {
      throw new NotFoundException(`Area with ID ${data.area_id} not found`);
    }

    const streetLightGroup = await this.prisma.streetLightGroup.create({
      data,
      include: {
        area: true,
        streetLight: true,
      },
    });

    return streetLightGroup;
  };

  updateStreetLightGroup = async (id: number, data: UpdateStreetLightGroupDto) => {
    const exists = await this.prisma.streetLightGroup.findUnique({
      where: { id },
    });

    if (!exists) {
      throw new NotFoundException(`Street light group with ID ${id} not found`);
    }

    if (data.area_id) {
      const areaExists = await this.prisma.area.findUnique({
        where: { id: data.area_id },
      });

      if (!areaExists) {
        throw new NotFoundException(`Area with ID ${data.area_id} not found`);
      }
    }

    const updatedStreetLightGroup = await this.prisma.streetLightGroup.update({
      where: { id },
      data,
      include: {
        area: true,
        streetLight: true,
      },
    });

    return updatedStreetLightGroup;
  };

  deleteStreetLightGroup = async (id: number) => {
    const streetLightGroup = await this.prisma.streetLightGroup.findUnique({
      where: { id },
      include: {
        area: true,
        streetLight: true,
      },
    });

    if (!streetLightGroup) {
      throw new NotFoundException(`Street light group with ID ${id} not found`);
    }

    if (streetLightGroup.streetLight.length > 0) {
      throw new NotFoundException(
        `Cannot delete group with ID ${id} because it still has street lights associated with it`,
      );
    }

    return this.prisma.streetLightGroup.delete({
      where: { id },
      include: {
        area: true,
      },
    });
  };
}
