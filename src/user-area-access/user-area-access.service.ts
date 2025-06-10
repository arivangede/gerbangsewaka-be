import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DistrictService } from 'src/district/district.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { CreateAccessDto } from './dto/create-access.dto';

@Injectable()
export class UserAreaAccessService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private readonly districtService: DistrictService,
  ) {}

  getUserAreaAccessById = async (id: number) => {
    const access = await this.prisma.userAreaAccess.findUnique({
      where: {
        id,
      },
    });

    if (!access) {
      throw new NotFoundException('Access data not found.');
    }

    return access;
  };

  getUserAreaAccessByUserId = async (userId: string) => {
    const user = await this.userService.getUserById(userId);

    const accesses = await this.prisma.userAreaAccess.findMany({
      where: {
        userId: user.id,
      },
      include: {
        district: {
          select: {
            name: true,
          },
        },
      },
    });

    if (accesses.length === 0) {
      throw new NotFoundException('User has no access to any area.');
    }

    return accesses;
  };

  createAccess = async (data: CreateAccessDto) => {
    const user = await this.userService.getUserById(data.userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (user.userRole?.role.name !== 'client') {
      throw new ForbiddenException(
        'Only clients can be granted access to areas',
      );
    }

    const area = await this.districtService.getById(data.districtId);
    if (!area) {
      throw new NotFoundException('Area not found');
    }

    const existingAccess = await this.prisma.userAreaAccess.findFirst({
      where: {
        userId: data.userId,
        districtId: data.districtId,
      },
    });

    if (existingAccess) {
      throw new BadRequestException('User already has access to this area');
    }

    return this.prisma.userAreaAccess.create({
      data: {
        userId: data.userId,
        districtId: data.districtId,
      },
    });
  };

  removeAccess = async (id: number) => {
    const access = await this.getUserAreaAccessById(id);

    return this.prisma.userAreaAccess.delete({
      where: {
        id: access.id,
      },
    });
  };
}
