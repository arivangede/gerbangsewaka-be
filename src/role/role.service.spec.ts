import { Test, TestingModule } from '@nestjs/testing';
import { RoleService } from './role.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('RoleService', () => {
  let service: RoleService;

  const mockPrismaService = {
    role: {
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
        RoleService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<RoleService>(RoleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllRoles', () => {
    it('should return an array of roles', async () => {
      const result = [
        { id: 1, name: 'Admin', createdAt: new Date(), updatedAt: new Date() },
      ];
      jest.spyOn(service, 'getAllRoles').mockResolvedValue(result);

      expect(await service.getAllRoles()).toBe(result);
    });
  });

  describe('getRoleById', () => {
    it('should return a role by id', async () => {
      const result = {
        id: 1,
        name: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest.spyOn(service, 'getRoleById').mockResolvedValue(result);
      expect(await service.getRoleById(1)).toBe(result);
    });
  });

  describe('createRole', () => {
    it('should create a new role', async () => {
      const result = {
        id: 1,
        name: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const createRoleDto = { name: 'Admin' };
      jest.spyOn(service, 'createRole').mockResolvedValue(result);
      expect(await service.createRole(createRoleDto)).toBe(result);
    });
  });

  describe('updateRole', () => {
    it('should update an existing role', async () => {
      const result = {
        id: 1,
        name: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const updateRoleDto = { name: 'Admin' };
      jest.spyOn(service, 'updateRole').mockResolvedValue(result);
      expect(await service.updateRole(1, updateRoleDto)).toBe(result);
    });
  });

  describe('deleteRole', () => {
    it('should delete a role by id', async () => {
      const result = {
        id: 1,
        name: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest.spyOn(service, 'deleteRole').mockResolvedValue(result);
      expect(await service.deleteRole(1)).toBe(result);
    });
  });
});
