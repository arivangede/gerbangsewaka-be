import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';

@Injectable()
export class DistrictService {
  constructor(private readonly prisma: PrismaService) {}

  getAll = async () => {
    return this.prisma.district.findMany({});
  };

  getById = async (id: number) => {
    const district = await this.prisma.district.findUnique({
      where: {
        id,
      },
    });

    if (!district) {
      throw new NotFoundException('District not found.');
    }

    return district;
  };

  create = async (data: CreateDistrictDto) => {
    const existing = await this.prisma.district.findFirst({
      where: {
        name: data.name,
      },
    });

    if (existing) {
      throw new ConflictException('District is already exist.');
    }

    return this.prisma.district.create({
      data,
    });
  };

  update = async (id: number, data: UpdateDistrictDto) => {
    const district = await this.getById(id);

    return this.prisma.district.update({
      where: {
        id: district.id,
      },
      data,
    });
  };

  remove = async (id: number) => {
    const district = await this.getById(id);

    return this.prisma.district.delete({
      where: {
        id: district.id,
      },
    });
  };
}
