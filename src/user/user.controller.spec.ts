import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRoleService } from 'src/user-role/user-role.service';
import { RoleService } from 'src/role/role.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/role/role.guard';
import { AuthStrategy } from 'src/auth/auth.strategy';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { ExecutionContext, UnauthorizedException } from '@nestjs/common';

describe('UserController', () => {
  let controller: UserController;
  let authGuard: AuthGuard;
  let roleGuard: RoleGuard;

  const mockUserService = {
    getAllUsers: jest.fn(),
    getUserById: jest.fn(),
    getUserByEmail: jest.fn(),
    createUser: jest.fn(),
  };

  const mockUserRoleService = {
    createUserRole: jest.fn(),
  };

  const mockRoleService = {
    getRoleByName: jest.fn(),
  };

  const mockJwtService = {
    verifyAsync: jest.fn().mockResolvedValue({ sub: '1' }),
  };

  const mockReflector = {
    get: jest.fn().mockReturnValue(['admin']),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
      controllers: [UserController],
      providers: [
        { provide: UserService, useValue: mockUserService },
        { provide: UserRoleService, useValue: mockUserRoleService },
        { provide: RoleService, useValue: mockRoleService },
        { provide: JwtService, useValue: mockJwtService },
        { provide: Reflector, useValue: mockReflector },
        AuthStrategy,
        AuthGuard,
        RoleGuard,
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    authGuard = module.get<AuthGuard>(AuthGuard);
    roleGuard = module.get<RoleGuard>(RoleGuard);

    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should block unauthenticated access to profile', async () => {
    const context: ExecutionContext = {
      switchToHttp: () => ({
        getRequest: () => ({
          headers: {}, // No token
        }),
        getResponse: () => ({}),
      }),
      getHandler: () => ({}),
      getClass: () => ({}),
    } as ExecutionContext;

    await expect(authGuard.canActivate(context)).rejects.toThrow(
      UnauthorizedException,
    );
  });

  it('should block non-admin access to admin route', async () => {
    const context: ExecutionContext = {
      switchToHttp: () => ({
        getRequest: () => ({
          headers: { authorization: 'Bearer valid-token' },
          user: {
            id: '1',
            email: 'test@example.com',
            userRole: {
              role: {
                name: 'user', // Not an admin
              },
            },
          },
        }),
        getResponse: () => ({}),
      }),
      getHandler: () => ({}),
      getClass: () => ({}),
    } as ExecutionContext;

    const canActivate = await roleGuard.canActivate(context);
    expect(canActivate).toBe(false); // Should fail because user is not admin
    expect(mockReflector.get).toHaveBeenCalledWith(
      'roles',
      context.getHandler(),
    );
  });

  describe('getAllUsers', () => {
    it('should return all users', async () => {
      const users = [{ id: '1', email: 'test@example.com' }];
      mockUserService.getAllUsers.mockResolvedValue(users);

      expect(await controller.getAllUsers()).toEqual(users);
      expect(mockUserService.getAllUsers).toHaveBeenCalled();
    });
  });

  describe('getUserById', () => {
    it('should return a user by id', async () => {
      const user = { id: '1', email: 'test@example.com' };
      mockUserService.getUserById.mockResolvedValue(user);

      expect(await controller.getUserById('1')).toEqual(user);
      expect(mockUserService.getUserById).toHaveBeenCalledWith('1');
    });
  });

  describe('getUserByEmail', () => {
    it('should return a user by email', async () => {
      const user = { id: '1', email: 'test@example.com' };
      mockUserService.getUserByEmail.mockResolvedValue(user);

      expect(await controller.getUserByEmail('test@example.com')).toEqual(user);
      expect(mockUserService.getUserByEmail).toHaveBeenCalledWith(
        'test@example.com',
      );
    });
  });

  describe('createUser', () => {
    it('should create a user without role', async () => {
      const dto: CreateUserDto = {
        email: 'new@example.com',
        full_name: 'New User',
        password: 'password',
      };

      const newUser = { id: '1', ...dto };
      mockUserService.createUser.mockResolvedValue(newUser);

      const result = await controller.createUser(dto);

      expect(result).toEqual(newUser);
      expect(mockUserService.createUser).toHaveBeenCalledWith(dto);
      expect(mockRoleService.getRoleByName).not.toHaveBeenCalled();
      expect(mockUserRoleService.createUserRole).not.toHaveBeenCalled();
    });

    it('should create a user with role and assign it', async () => {
      const dto: CreateUserDto = {
        email: 'new@example.com',
        full_name: 'New User',
        password: 'password',
        role: 'Admin',
      };

      const newUser = { id: '1', ...dto };
      const role = { id: 99, name: 'Admin' };

      mockUserService.createUser.mockResolvedValue(newUser);
      mockRoleService.getRoleByName.mockResolvedValue(role);
      mockUserRoleService.createUserRole.mockResolvedValue({
        id: 'user-role-id',
        userId: '1',
        roleId: 99,
      });

      const result = await controller.createUser(dto);

      expect(result).toEqual(newUser);
      expect(mockUserService.createUser).toHaveBeenCalledWith(dto);
      expect(mockRoleService.getRoleByName).toHaveBeenCalledWith('Admin');
      expect(mockUserRoleService.createUserRole).toHaveBeenCalledWith({
        userId: '1',
        roleId: 99,
      });
    });
  });
});
