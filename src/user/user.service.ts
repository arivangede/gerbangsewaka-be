import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from 'src/auth/dto/register.dto';
import * as bcrypt from 'bcrypt';
import { Role, User, UserRole } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';

type UserWithRole = User & {
  userRole: (UserRole & { role: Role }) | null;
};
@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  getAllUsers = async () => {
    return this.prisma.user.findMany({
      include: {
        userRole: {
          include: {
            role: true,
          },
        },
      },
    });
  };

  getUserById = async (id: string) => {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        userRole: {
          include: {
            role: true,
          },
        },
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  };

  getUserByEmail = async (email: string): Promise<UserWithRole | null> => {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email },
        include: {
          userRole: {
            include: {
              role: true,
            },
          },
        },
      });

      return user;
    } catch (error) {
      console.error('Error fetching user by email:', error);
      return null;
    }
  };

  createUser = async (data: RegisterDto): Promise<User> => {
    const { email, full_name, password } = data;

    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new HttpException('Email already exists', 400);
    }

    const hashedPassword: string = await bcrypt.hash(password, 10);

    return this.prisma.user.create({
      data: {
        email,
        full_name,
        password: hashedPassword,
      },
    });
  };

  verifyUser = async (userId: string): Promise<User> => {
    return this.prisma.user.update({
      where: { id: userId },
      data: { emailVerified: new Date() },
    });
  };

  updateUser = async (userId: string, data: UpdateUserDto) => {
    const user = await this.getUserById(userId);

    if (!user) {
      throw new NotFoundException('User tidak ditemukan');
    }

    const updatedData: UpdateUserDto = {};

    if (data.email) {
      updatedData.email = data.email;
    }

    if (data.full_name) {
      updatedData.full_name = data.full_name;
    }

    if (data.profile_picture) {
      updatedData.profile_picture = data.profile_picture;
    }

    if (data.phone) {
      updatedData.phone = data.phone;
    }

    if (data.password) {
      updatedData.password = await bcrypt.hash(data.password, 10);
    }

    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: updatedData,
    });
  };
}
