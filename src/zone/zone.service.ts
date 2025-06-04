import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateZoneDto } from './dto/create-zone.dto';
import { UpdateZoneDto } from './dto/update-zone.dto';

@Injectable()
export class ZoneService {
  constructor(private readonly prisma: PrismaService) {}

  getAll = async () => {
    return this.prisma.zone.findMany();
  };

  getById = async (id: number) => {
    const zone = await this.prisma.zone.findUnique({
      where: {
        id,
      },
    });

    if (!zone) {
      throw new NotFoundException('Zone not found');
    }

    return zone;
  };

  create = async (data: CreateZoneDto) => {
    const existingZone = await this.prisma.zone.findFirst({
      where: {
        name: data.name,
      },
    });

    if (existingZone) {
      throw new ConflictException('Zone already exists.');
    }

    const newZone = await this.prisma.zone.create({
      data,
    });

    return newZone;
  };

  update = async (id: number, data: UpdateZoneDto) => {
    const zone = await this.getById(id);

    const updatedZone = await this.prisma.zone.update({
      where: {
        id: zone.id,
      },
      data,
    });

    return updatedZone;
  };

  remove = async (id: number) => {
    const zone = await this.getById(id);

    await this.prisma.zone.delete({
      where: {
        id: zone.id,
      },
    });
  };
}
