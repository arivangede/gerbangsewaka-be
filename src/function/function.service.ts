import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFunctionDto } from './dto/create-function.dto';
import { UpdateFunctionDto } from './dto/update-function.dto';

@Injectable()
export class FunctionService {
  constructor(private readonly prisma: PrismaService) {}

  getAll = async () => {
    return this.prisma.function.findMany({});
  };

  getById = async (id: number) => {
    const functionData = await this.prisma.function.findUnique({
      where: {
        id,
      },
    });

    if (!functionData) {
      throw new NotFoundException('Function not found.');
    }

    return functionData;
  };

  create = async (data: CreateFunctionDto) => {
    const existingFunction = await this.prisma.function.findFirst({
      where: {
        name: data.name,
      },
    });

    if (existingFunction) {
      throw new ConflictException('Function already exists.');
    }

    return this.prisma.function.create({
      data,
    });
  };

  update = async (id: number, data: UpdateFunctionDto) => {
    const functionData = await this.getById(id);

    return this.prisma.function.update({
      where: {
        id: functionData.id,
      },
      data,
    });
  };

  remove = async (id: number) => {
    const functionData = await this.getById(id);

    return await this.prisma.function.delete({
      where: {
        id: functionData.id,
      },
    });
  };

  upsert = async (name: string) => {
    return this.prisma.function.upsert({
      where: {
        name,
      },
      update: {},
      create: {
        name,
      },
    });
  };
}
