import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';

@Injectable()
export class UserRoleService {
  constructor(private readonly prisma: PrismaService) {}

  getAllUserRoles = async () => {
    return this.prisma.userRole.findMany();
  };

  getUserRoleById = async (id: string) => {
    const userRole = await this.prisma.userRole.findUnique({
      where: { id },
    });

    if (!userRole) {
      throw new NotFoundException('User role not found');
    }

    return userRole;
  };

  getUserRolesByRoleId = async (roleId: number) => {
    return this.prisma.userRole.findMany({
      where: {
        roleId,
      },
    });
  };

  createUserRole = async (data: CreateUserRoleDto) => {
    const existingUserRole = await this.prisma.userRole.findUnique({
      where: {
        userId: data.userId,
      },
    });

    if (existingUserRole) {
      throw new ConflictException('User role already exist');
    }

    return this.prisma.userRole.create({
      data,
    });
  };

  updateUserRole = async (id: string, data: UpdateUserRoleDto) => {
    const userRole = await this.getUserRoleById(id);

    return this.prisma.userRole.update({
      where: { id: userRole.id },
      data,
    });
  };
}
