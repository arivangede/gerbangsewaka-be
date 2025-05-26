import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RoleService {
  constructor(private readonly prisma: PrismaService) {}

  getAllRoles = async () => {
    return this.prisma.role.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  };

  getRoleById = async (id: number) => {
    const role = await this.prisma.role.findFirst({
      where: { id },
    });

    if (!role) {
      throw new HttpException(
        `Role with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return role;
  };

  getRoleByName = async (name: string) => {
    const role = await this.prisma.role.findUnique({
      where: {
        name,
      },
    });

    if (!role) {
      throw new NotFoundException('This role name is not found');
    }

    return role;
  };

  createRole = async (data: CreateRoleDto) => {
    return await this.prisma.role.create({ data });
  };

  updateRole = async (id: number, data: UpdateRoleDto) => {
    return this.prisma.role.update({
      where: { id },
      data,
    });
  };

  deleteRole = async (id: number) => {
    return this.prisma.role.delete({
      where: { id },
    });
  };
}
