import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Injectable()
export class GroupService {
  constructor(private readonly prisma: PrismaService) {}

  getAll = async () => {
    return this.prisma.group.findMany({});
  };

  getById = async (id: number) => {
    const group = await this.prisma.group.findUnique({
      where: {
        id,
      },
    });

    if (!group) {
      throw new NotFoundException('Group not found.');
    }

    return group;
  };

  create = async (data: CreateGroupDto) => {
    const existing = await this.prisma.group.findFirst({
      where: {
        code: data.code,
      },
    });

    if (existing) {
      throw new ConflictException('Group is already exist.');
    }

    return this.prisma.group.create({
      data,
    });
  };

  update = async (id: number, data: UpdateGroupDto) => {
    const group = await this.getById(id);

    return this.prisma.group.update({
      where: {
        id: group.id,
      },
      data,
    });
  };

  remove = async (id: number) => {
    const group = await this.getById(id);

    return this.prisma.group.delete({
      where: {
        id: group.id,
      },
    });
  };
}
