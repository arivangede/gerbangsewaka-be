import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStreetLightDto } from './dto/create-street-light.dto';
import { UpdateStreetLightDto } from './dto/update-street-light.dto';

@Injectable()
export class StreetLightService {
  constructor(private readonly prisma: PrismaService) {}

  getAllStreetLights = async () => {
    const streetLights = await this.prisma.streetLight.findMany({
      include: {
        roadFunction: true,
        streetLightGroup: {
          include: {
            area: true,
          },
        },
        lamp: true,
        streetLightAccessory: true,
      },
    });

    if (!streetLights.length) {
      throw new NotFoundException('No street lights found');
    }

    return streetLights;
  };

  getStreetLightById = async (id: number) => {
    const streetLight = await this.prisma.streetLight.findUnique({
      where: { id },
      include: {
        roadFunction: true,
        streetLightGroup: {
          include: {
            area: true,
          },
        },
        lamp: true,
        streetLightAccessory: true,
      },
    });

    if (!streetLight) {
      throw new NotFoundException(`Street light with ID ${id} not found`);
    }

    return streetLight;
  };

  createStreetLight = async (data: CreateStreetLightDto) => {
    // Verify road function exists
    const roadFunctionExists = await this.prisma.roadFunction.findUnique({
      where: { id: data.roadfunction_id },
    });

    if (!roadFunctionExists) {
      throw new NotFoundException(`Road function with ID ${data.roadfunction_id} not found`);
    }

    // If group_id is provided, verify it exists
    if (data.group_id) {
      const groupExists = await this.prisma.streetLightGroup.findUnique({
        where: { id: data.group_id },
      });

      if (!groupExists) {
        throw new NotFoundException(`Street light group with ID ${data.group_id} not found`);
      }
    }

    const streetLight = await this.prisma.streetLight.create({
      data,
      include: {
        roadFunction: true,
        streetLightGroup: {
          include: {
            area: true,
          },
        },
        lamp: true,
        streetLightAccessory: true,
      },
    });

    return streetLight;
  };

  updateStreetLight = async (id: number, data: UpdateStreetLightDto) => {
    // Verify street light exists
    const exists = await this.prisma.streetLight.findUnique({
      where: { id },
    });

    if (!exists) {
      throw new NotFoundException(`Street light with ID ${id} not found`);
    }

    // If roadfunction_id is provided, verify it exists
    if (data.roadfunction_id) {
      const roadFunctionExists = await this.prisma.roadFunction.findUnique({
        where: { id: data.roadfunction_id },
      });

      if (!roadFunctionExists) {
        throw new NotFoundException(`Road function with ID ${data.roadfunction_id} not found`);
      }
    }

    // If group_id is provided, verify it exists
    if (data.group_id) {
      const groupExists = await this.prisma.streetLightGroup.findUnique({
        where: { id: data.group_id },
      });

      if (!groupExists) {
        throw new NotFoundException(`Street light group with ID ${data.group_id} not found`);
      }
    }

    const updatedStreetLight = await this.prisma.streetLight.update({
      where: { id },
      data,
      include: {
        roadFunction: true,
        streetLightGroup: {
          include: {
            area: true,
          },
        },
        lamp: true,
        streetLightAccessory: true,
      },
    });

    return updatedStreetLight;
  };

  deleteStreetLight = async (id: number) => {
    // Verify street light exists
    const streetLight = await this.prisma.streetLight.findUnique({
      where: { id },
      include: {
        lamp: true,
        streetLightAccessory: true,
      },
    });

    if (!streetLight) {
      throw new NotFoundException(`Street light with ID ${id} not found`);
    }

    // Check if there are associated lamps or accessories
    if (streetLight.lamp.length > 0 || streetLight.streetLightAccessory.length > 0) {
      throw new NotFoundException(
        `Cannot delete street light with ID ${id} because it has associated lamps or accessories`,
      );
    }

    return this.prisma.streetLight.delete({
      where: { id },
    });
  };
}
