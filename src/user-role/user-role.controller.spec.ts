import { Test, TestingModule } from '@nestjs/testing';
import { UserRoleController } from './user-role.controller';
import { UserRoleService } from './user-role.service';
import { NotFoundException } from '@nestjs/common';

describe('UserRoleController', () => {
  let controller: UserRoleController;

  const mockUserRoleService = {
    getAllUserRoles: jest.fn(),
    getUserRolesByRoleId: jest.fn(),
    updateUserRole: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserRoleController],
      providers: [
        {
          provide: UserRoleService,
          useValue: mockUserRoleService,
        },
      ],
    }).compile();

    controller = module.get<UserRoleController>(UserRoleController);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllUserRoles', () => {
    it('should return an array of roles', async () => {
      const result = [
        {
          id: 'fake-id',
          userId: 'fake-user-id',
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      mockUserRoleService.getAllUserRoles.mockResolvedValue(result);

      expect(await controller.getAllUserRoles()).toEqual(result);
    });
  });

  describe('getUserRolesByRoleId', () => {
    it('should return an array of searched role id', async () => {
      const result = [
        {
          id: 'fake-id',
          userId: 'fake-user-id',
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      mockUserRoleService.getUserRolesByRoleId.mockResolvedValue(result);

      expect(await controller.getUserRolesByRoleId(1)).toEqual(result);
    });

    it('should throw NotFoundException if not found', async () => {
      mockUserRoleService.getUserRolesByRoleId.mockRejectedValue(
        new NotFoundException(),
      );

      await expect(controller.getUserRolesByRoleId(1)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('updateUserRole', () => {
    it('should can update user role', async () => {
      const dto = { roleId: 2 };
      const result = { id: 'fake-id', userId: 'fake-user-id', roleId: 2 };

      mockUserRoleService.updateUserRole.mockResolvedValue(result);

      expect(await controller.updateUserRole('fake-id', dto)).toEqual(result);
    });

    it('should throw NotFoundException if not found', async () => {
      const dto = { roleId: 2 };

      mockUserRoleService.updateUserRole.mockRejectedValue(
        new NotFoundException(),
      );

      await expect(controller.updateUserRole('fake-id', dto)).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
