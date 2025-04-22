import { Test, TestingModule } from '@nestjs/testing';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('RoleController', () => {
  let controller: RoleController;
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
      controllers: [RoleController],
      providers: [
        RoleService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    controller = module.get<RoleController>(RoleController);
    service = module.get<RoleService>(RoleService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllRoles', () => {
    it('should return an array of roles', async () => {
      const result = [
        { id: 1, name: 'Admin', createdAt: new Date(), updatedAt: new Date() },
      ];
      jest.spyOn(service, 'getAllRoles').mockResolvedValue(result);
      expect(await controller.getAllRoles()).toBe(result);
      expect(service.getAllRoles).toHaveBeenCalled();
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
      expect(await controller.getRoleById(1)).toBe(result);
      expect(service.getRoleById).toHaveBeenCalledWith(1);
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
      expect(await controller.createRole(createRoleDto)).toBe(result);
      expect(service.createRole).toHaveBeenCalledWith(createRoleDto);
    });
  });

  describe('updateRole', () => {
    it('should update a role', async () => {
      const result = {
        id: 1,
        name: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const updateRoleDto = { name: 'Admin' };
      jest.spyOn(service, 'updateRole').mockResolvedValue(result);
      expect(await controller.updateRole(1, updateRoleDto)).toBe(result);
      expect(service.updateRole).toHaveBeenCalledWith(1, updateRoleDto);
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
      expect(await controller.deleteRole(1)).toBe(result);
      expect(service.deleteRole).toHaveBeenCalledWith(1);
    });
  });
});
