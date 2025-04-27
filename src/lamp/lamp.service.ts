import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLampDto } from './dto/create-lamp.dto';
import { UpdateLampDto } from './dto/update-lamp.dto';

@Injectable()
export class LampService {
  constructor(private readonly prisma: PrismaService) {}

  getAllLamps = async () => {
    const lamps = await this.prisma.lamp.findMany({
      include: {
        streetLight: true,
      },
    });

    if (!lamps.length) {
      throw new NotFoundException('No lamps found');
    }

    return lamps;
  };

  getLampById = async (id: number) => {
    const lamp = await this.prisma.lamp.findUnique({
      where: { id },
      include: {
        streetLight: true,
      },
    });

    if (!lamp) {
      throw new NotFoundException(`Lamp with ID ${id} not found`);
    }

    return lamp;
  };

  createLamp = async (data: CreateLampDto) => {
    const streetLightExists = await this.prisma.streetLight.findUnique({
      where: { id: data.streetlighting_id },
    });

    if (!streetLightExists) {
      throw new NotFoundException(`Street light with ID ${data.streetlighting_id} not found`);
    }

    const lamp = await this.prisma.lamp.create({
      data,
      include: {
        streetLight: true,
      },
    });

    return lamp;
  };

  updateLamp = async (id: number, data: UpdateLampDto) => {
    const exists = await this.prisma.lamp.findUnique({
      where: { id },
    });

    if (!exists) {
      throw new NotFoundException(`Lamp with ID ${id} not found`);
    }

    if (data.streetlighting_id) {
      const streetLightExists = await this.prisma.streetLight.findUnique({
        where: { id: data.streetlighting_id },
      });

      if (!streetLightExists) {
        throw new NotFoundException(`Street light with ID ${data.streetlighting_id} not found`);
      }
    }

    const updatedLamp = await this.prisma.lamp.update({
      where: { id },
      data,
      include: {
        streetLight: true,
      },
    });

    return updatedLamp;
  };

  deleteLamp = async (id: number) => {
    const lamp = await this.prisma.lamp.findUnique({
      where: { id },
    });

    if (!lamp) {
      throw new NotFoundException(`Lamp with ID ${id} not found`);
    }

    return this.prisma.lamp.delete({
      where: { id },
    });
  };
}
