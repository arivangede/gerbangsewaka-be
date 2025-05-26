import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStreetLightAccessoryDto } from './dto/create-street-light-accessory.dto';
import { UpdateStreetLightAccessoryDto } from './dto/update-street-light-accessory.dto';

@Injectable()
export class StreetLightAccessoryService {
  constructor(private prisma: PrismaService) {}

  getAllStreetLightAccessories = async () => {
    const accessories = await this.prisma.streetLightAccessory.findMany({
      include: {
        streetLight: true,
      },
    });

    if (!accessories.length) {
      throw new NotFoundException('No street light accessories found');
    }

    return accessories;
  };

  getStreetLightAccessoryById = async (id: number) => {
    const accessory = await this.prisma.streetLightAccessory.findUnique({
      where: { id },
      include: {
        streetLight: true,
      },
    });

    if (!accessory) {
      throw new NotFoundException(`Street light accessory with ID ${id} not found`);
    }

    return accessory;
  };

  createStreetLightAccessory = async (data: CreateStreetLightAccessoryDto) => {
    const streetLightExists = await this.prisma.streetLight.findUnique({
      where: { id: data.streetlighting_id },
    });

    if (!streetLightExists) {
      throw new NotFoundException(`Street light with ID ${data.streetlighting_id} not found`);
    }

    return this.prisma.streetLightAccessory.create({
      data,
      include: {
        streetLight: true,
      },
    });
  };

  updateStreetLightAccessory = async (id: number, data: UpdateStreetLightAccessoryDto) => {
    await this.getStreetLightAccessoryById(id);

    if (data.streetlighting_id) {
      const streetLightExists = await this.prisma.streetLight.findUnique({
        where: { id: data.streetlighting_id },
      });

      if (!streetLightExists) {
        throw new NotFoundException(`Street light with ID ${data.streetlighting_id} not found`);
      }
    }

    return this.prisma.streetLightAccessory.update({
      where: { id },
      data,
      include: {
        streetLight: true,
      },
    });
  };

  deleteStreetLightAccessory = async (id: number) => {
    await this.getStreetLightAccessoryById(id);

    return this.prisma.streetLightAccessory.delete({
      where: { id },
    });
  };
}
