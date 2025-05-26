import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

describe('AuthController', () => {
  let controller: AuthController;
  let mockAuthService: jest.Mocked<AuthService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            verifyEmail: jest.fn(),
            register: jest.fn(),
            login: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    mockAuthService = module.get(AuthService);
  });

  describe('verifyEmail', () => {
    it('should call service.verifyEmail with correct token', async () => {
      const token = 'fake-token';
      const result = { message: 'Email berhasil diverifikasi' };

      mockAuthService.verifyEmail.mockResolvedValue(result);

      const response = await controller.verifyEmail(token);

      expect(response).toEqual(result);
      expect(mockAuthService.verifyEmail).toHaveBeenCalledWith(token);
    });
  });

  describe('register', () => {
    it('should call service.register with correct data', async () => {
      const dto: RegisterDto = {
        full_name: 'Test User',
        email: 'test@email.com',
        password: 'secure123',
      };
      const result = {
        message:
          'Akun berhasil dibuat, mohon untuk cek email untuk verifikasi akun.',
      };

      mockAuthService.register.mockResolvedValue(result);

      const response = await controller.register(dto);

      expect(response).toEqual(result);
      expect(mockAuthService.register).toHaveBeenCalledWith(dto);
    });
  });

  describe('login', () => {
    it('should call service.login with correct data', async () => {
      const dto: LoginDto = {
        email: 'test@email.com',
        password: 'secure123',
      };
      const result = {
        message: 'Sign-In Berhasil',
        token: 'jwt-token',
        user: {
          id: 'user-id',
          email: dto.email,
          full_name: 'test user',
          emailVerified: new Date(),
          phone: null,
          phoneVerified: null,
          profile_picture: null,
          password: 'hashed-password',
          createdAt: new Date(),
          updatedAt: new Date(),
          userRole: {
            id: 'user-role-id',
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 'user-id',
            roleId: 1,
            role: {
              id: 1,
              name: 'Admin',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          },
        },
      };

      mockAuthService.login.mockResolvedValue(result);

      const response = await controller.login(dto);

      expect(response).toEqual(result);
      expect(mockAuthService.login).toHaveBeenCalledWith(dto);
    });
  });
});
