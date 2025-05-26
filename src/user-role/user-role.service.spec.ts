import { Test, TestingModule } from '@nestjs/testing';
import { UserRoleService } from './user-role.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConflictException, NotFoundException } from '@nestjs/common';

describe('UserRoleService', () => {
  let service: UserRoleService;

  const mockPrismaService = {
    userRole: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserRoleService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<UserRoleService>(UserRoleService);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllUserRoles', () => {
    it('should return an array of all roles', async () => {
      const result = [
        {
          id: 'fake-id',
          userId: 'fake-user-id',
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      mockPrismaService.userRole.findMany.mockResolvedValue(result);

      expect(await service.getAllUserRoles()).toEqual(result);
      expect(mockPrismaService.userRole.findMany).toHaveBeenCalled();
    });
  });

  describe('getUserRoleById', () => {
    it('should return userRole data search by id', async () => {
      const result = {
        id: 'fake-id',
        userId: 'fake-user-id',
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockPrismaService.userRole.findUnique.mockResolvedValue(result);

      expect(await service.getUserRoleById('fake-id')).toEqual(result);
      expect(mockPrismaService.userRole.findUnique).toHaveBeenCalled();
    });

    it('should throw error if not found', async () => {
      mockPrismaService.userRole.findUnique.mockResolvedValue(null);

      await expect(service.getUserRoleById('fake-id')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('getUserRolesByRoleId', () => {
    it('should return userRole data search by role id', async () => {
      const result = [
        {
          id: 'fake-id',
          userId: 'fake-user-id',
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      mockPrismaService.userRole.findMany.mockResolvedValue(result);

      expect(await service.getUserRolesByRoleId(1)).toEqual(result);
      expect(mockPrismaService.userRole.findMany).toHaveBeenCalled();
    });
  });

  describe('createUserRole', () => {
    it('should can create new user role', async () => {
      const result = {
        id: 'fake-id',
        userId: 'fake-user-id',
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const createUserRoleDto = { userId: 'fake-user-id', roleId: 1 };

      mockPrismaService.userRole.create.mockResolvedValue(result);

      expect(await service.createUserRole(createUserRoleDto)).toEqual(result);
      expect(mockPrismaService.userRole.create).toHaveBeenCalled();
    });

    it('should throw ConflictException if user role already exists', async () => {
      const existing = {
        id: 'existing-id',
        userId: 'fake-user-id',
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const createUserRoleDto = { userId: 'fake-user-id', roleId: 1 };

      mockPrismaService.userRole.findUnique.mockResolvedValue(existing);

      await expect(service.createUserRole(createUserRoleDto)).rejects.toThrow(
        ConflictException,
      );
    });
  });

  describe('updateUserRole', () => {
    it('should can update user role', async () => {
      const userRole = {
        id: 'fake-id',
        userId: 'fake-user-id',
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const updatedUserRole = {
        ...userRole,
        roleId: 2,
        updatedAt: new Date(),
      };

      const updateUserRoleDto = { roleId: 2 };

      mockPrismaService.userRole.findUnique.mockResolvedValue(userRole);
      mockPrismaService.userRole.update.mockResolvedValue(updatedUserRole);

      const result = await service.updateUserRole('fake-id', updateUserRoleDto);
      expect(result).toEqual(updatedUserRole);
    });

    it('should throw error if not found', async () => {
      const updateUserRoleDto = { roleId: 2 };

      mockPrismaService.userRole.findUnique.mockResolvedValue(null);

      await expect(
        service.updateUserRole('non-existent-id', updateUserRoleDto),
      ).rejects.toThrow(NotFoundException);
    });
  });
});
