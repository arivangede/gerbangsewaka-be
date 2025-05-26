import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { HttpException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from 'src/auth/dto/register.dto';

jest.mock('bcrypt');

describe('UserService', () => {
  let service: UserService;

  const mockPrismaService = {
    user: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllUsers', () => {
    it('should return all users with roles', async () => {
      const users = [
        {
          id: '1',
          email: 'a@b.com',
          userRole: { role: { id: 1, name: 'Admin' } },
        },
      ];
      mockPrismaService.user.findMany.mockResolvedValue(users);

      const result = await service.getAllUsers();
      expect(result).toEqual(users);
      expect(mockPrismaService.user.findMany).toHaveBeenCalledWith({
        include: { userRole: { include: { role: true } } },
      });
    });
  });

  describe('getUserById', () => {
    it('should return user by ID with role', async () => {
      const user = {
        id: '1',
        email: 'a@b.com',
        userRole: { role: { name: 'Admin' } },
      };
      mockPrismaService.user.findUnique.mockResolvedValue(user);

      const result = await service.getUserById('1');
      expect(result).toEqual(user);
      expect(mockPrismaService.user.findUnique).toHaveBeenCalledWith({
        where: { id: '1' },
        include: { userRole: { include: { role: true } } },
      });
    });
  });

  describe('getUserByEmail', () => {
    it('should return user by email with role', async () => {
      const user = {
        id: '1',
        email: 'a@b.com',
        userRole: { role: { name: 'Admin' } },
      };
      mockPrismaService.user.findUnique.mockResolvedValue(user);

      const result = await service.getUserByEmail('a@b.com');
      expect(result).toEqual(user);
    });

    it('should return null on error', async () => {
      mockPrismaService.user.findUnique.mockRejectedValue(new Error('fail'));

      const result = await service.getUserByEmail('fail@x.com');
      expect(result).toBeNull();
    });
  });

  describe('createUser', () => {
    const dto: RegisterDto = {
      email: 'new@user.com',
      full_name: 'New User',
      password: 'secret',
    };

    it('should create a new user if email not exists', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(null);
      (bcrypt.hash as jest.Mock).mockResolvedValue('hashed-password');
      const createdUser = {
        id: '1',
        email: dto.email,
        full_name: dto.full_name,
        password: 'hashed-password',
      };
      mockPrismaService.user.create.mockResolvedValue(createdUser);

      const result = await service.createUser(dto);
      expect(result).toEqual(createdUser);
      expect(bcrypt.hash).toHaveBeenCalledWith(dto.password, 10);
    });

    it('should throw HttpException if email already exists', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue({
        id: '1',
        email: dto.email,
      });

      await expect(service.createUser(dto)).rejects.toThrow(HttpException);
    });
  });

  describe('verifyUser', () => {
    it('should update user and set emailVerified', async () => {
      const updatedUser = {
        id: '1',
        email: 'test@x.com',
        emailVerified: new Date(),
      };
      mockPrismaService.user.update.mockResolvedValue(updatedUser);

      const result = await service.verifyUser('1');
      expect(result).toEqual(updatedUser);
      expect(mockPrismaService.user.update).toHaveBeenCalledWith({
        where: { id: '1' },
        data: { emailVerified: new Date() },
      });
    });
  });
});
