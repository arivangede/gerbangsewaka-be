import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailService } from 'src/mail/mail.service';
import { HttpException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

jest.mock('bcrypt', () => ({
  compare: jest.fn(),
}));

describe('AuthService', () => {
  let service: AuthService;

  const mockUserService = {
    getUserByEmail: jest.fn(),
    createUser: jest.fn(),
    verifyUser: jest.fn(),
  };

  const mockJwtService = {
    sign: jest.fn(),
  };

  const mockPrismaService = {
    role: {
      findFirst: jest.fn(),
    },
    userRole: {
      create: jest.fn(),
    },
    userVerificationToken: {
      create: jest.fn(),
      findUnique: jest.fn(),
      delete: jest.fn(),
    },
  };

  const mockMailService = {
    sendMail: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UserService, useValue: mockUserService },
        { provide: JwtService, useValue: mockJwtService },
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: MailService, useValue: mockMailService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('register', () => {
    it('should throw if email already used', async () => {
      mockUserService.getUserByEmail.mockResolvedValue({ id: '1' });
      await expect(
        service.register({
          email: 'test@email.com',
          full_name: 'new user',
          password: 'password',
        }),
      ).rejects.toThrow(HttpException);
    });

    it('should can register new user, assign role, and send email verification', async () => {
      const user = {
        id: 'fake-id',
        email: 'test@email.com',
        full_name: 'new user',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const role = {
        id: 1,
        name: 'tester',
        createdAt: new Date(),
        updateAt: new Date(),
      };

      mockUserService.getUserByEmail.mockResolvedValue(null);
      mockUserService.createUser.mockResolvedValue(user);
      mockPrismaService.role.findFirst.mockResolvedValue(role);
      mockPrismaService.userRole.create.mockResolvedValue(undefined);
      jest.spyOn(service, 'sendVerificationEmail').mockResolvedValue(undefined);

      const result = await service.register({
        email: 'test@mail.com',
        full_name: 'new user',
        password: 'password',
      });
      expect(result.message).toBe(
        'Akun berhasil dibuat, mohon untuk cek email untuk verifikasi akun.',
      );
    });
  });

  describe('sendVerificationEmail', () => {
    it('should throw if user not found', async () => {
      mockUserService.getUserByEmail.mockResolvedValue(null);
      await expect(
        service.sendVerificationEmail('test@email.com'),
      ).rejects.toThrow(HttpException);
    });

    it('should create token and send email', async () => {
      const user = {
        id: 'fake-id',
        full_name: 'new user',
        email: 'test@email.com',
      };

      mockUserService.getUserByEmail.mockResolvedValue(user);
      mockPrismaService.userVerificationToken.create.mockResolvedValue(
        undefined,
      );
      mockMailService.sendMail.mockResolvedValue(undefined);

      await expect(
        service.sendVerificationEmail('test@email.com'),
      ).resolves.toBeUndefined();
      expect(mockPrismaService.userVerificationToken.create).toHaveBeenCalled();
      expect(mockMailService.sendMail).toHaveBeenCalled();
    });
  });

  describe('verifyEmail', () => {
    it('should throw if token invalid', async () => {
      mockPrismaService.userVerificationToken.findUnique.mockResolvedValue(
        null,
      );
      await expect(service.verifyEmail('invalid-token')).rejects.toThrow(
        HttpException,
      );
    });

    it('should verifyUser and delete token', async () => {
      const tokenData = { id: '1', userId: 'fake-user-id' };

      mockPrismaService.userVerificationToken.findUnique.mockResolvedValue(
        tokenData,
      );
      mockPrismaService.userVerificationToken.delete.mockResolvedValue(
        undefined,
      );
      mockUserService.verifyUser.mockResolvedValue(undefined);

      const result = await service.verifyEmail('valid-token');
      expect(result.message).toBe('Email berhasil diverifikasi');
    });
  });

  describe('login', () => {
    it('should throw if user not found', async () => {
      mockUserService.getUserByEmail.mockResolvedValue(null);

      const dto = {
        email: 'test@email.com',
        password: 'password',
      };

      await expect(service.login(dto)).rejects.toThrow(HttpException);
    });

    it('should throw if password is wrong', async () => {
      mockUserService.getUserByEmail.mockResolvedValue({ password: 'hashed' });
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      const dto = {
        email: 'test@email.com',
        password: 'password',
      };

      await expect(service.login(dto)).rejects.toThrow(HttpException);
    });

    it('should throw if email not verified', async () => {
      mockUserService.getUserByEmail.mockResolvedValue({
        password: 'hashed',
        emailVerified: false,
      });
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);

      await expect(
        service.login({ email: 'test@email.com', password: 'password' }),
      ).rejects.toThrow(HttpException);
    });

    it('should return token and user on success', async () => {
      const user = {
        id: 'fake-id',
        full_name: 'test user',
        password: 'password',
        email: 'test@email.com',
        emailVerified: new Date(),
        userRole: {
          role: {
            id: 1,
          },
        },
      };

      mockUserService.getUserByEmail.mockResolvedValue(user);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      mockJwtService.sign.mockReturnValue('jwt-token');

      const result = await service.login({
        email: 'test@email.com',
        password: 'password',
      });

      expect(result).toEqual({
        message: 'Sign-In Berhasil',
        token: 'jwt-token',
        user: user,
      });
    });
  });
});
