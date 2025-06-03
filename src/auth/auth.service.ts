import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { randomBytes } from 'crypto';
import { MailService } from 'src/mail/mail.service';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
  ) {}

  register = async (data: RegisterDto) => {
    const existingUser = await this.userService.getUserByEmail(data.email);

    if (existingUser) {
      throw new HttpException(
        'Email ini sudah digunakan oleh user lain',
        HttpStatus.BAD_REQUEST,
      );
    }

    const user = await this.userService.createUser(data);

    const userRoleId = await this.prisma.role.findFirst({
      where: {
        name: 'user',
      },
      select: {
        id: true,
      },
    });

    if (!userRoleId) {
      throw new HttpException(
        "Role 'user' is not found",
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.prisma.userRole.create({
      data: {
        userId: user.id,
        roleId: userRoleId.id,
      },
    });

    await this.sendVerificationEmail(user.email);

    return {
      message:
        'Akun berhasil dibuat, mohon untuk cek email untuk verifikasi akun.',
    };
  };

  sendVerificationEmail = async (email: string) => {
    const user = await this.userService.getUserByEmail(email);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const emailToken = randomBytes(32).toString('hex');

    await this.prisma.userToken.create({
      data: {
        userId: user.id,
        token: emailToken,
        type: 'EMAIL_VERIFICATION',
      },
    });

    const verificationUrl = `${process.env.APP_FRONTEND_URL}/auth/verify-email?token=${emailToken}`;

    try {
      await this.mailService.sendMail(
        user.email,
        'Email Verification',
        'verify-email',
        { user: user.full_name, verificationUrl: verificationUrl },
      );
    } catch (error) {
      console.error('sendMail error: ', error);
      throw new InternalServerErrorException(
        'Email gagal dikirim, coba lagi nanti',
      );
    }
  };

  verifyEmail = async (token: string) => {
    const verificationToken = await this.prisma.userToken.findUnique({
      where: { token, type: 'EMAIL_VERIFICATION' },
    });

    if (!verificationToken) {
      throw new HttpException(
        'Token Invalid atau sudah kedaluwarsa.',
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.userService.verifyUser(verificationToken.userId);

    await this.prisma.userToken.delete({
      where: { id: verificationToken.id },
    });

    return { message: 'Email berhasil diverifikasi' };
  };

  login = async (data: LoginDto) => {
    const user = await this.userService.getUserByEmail(data.email);

    if (!user) {
      throw new HttpException(
        'Email atau Password yang anda masukkan salah',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    if (!isPasswordValid) {
      throw new HttpException(
        'Email atau Password yang anda masukkan salah',
        HttpStatus.UNAUTHORIZED,
      );
    }

    if (!user.emailVerified) {
      throw new HttpException(
        'Akun anda belum terverifikasi email.',
        HttpStatus.FORBIDDEN,
      );
    }

    const payload = { sub: user.id };
    const token = this.jwtService.sign(payload);

    return { message: 'Sign-In Berhasil', token, user };
  };

  forgotPassword = async (data: ForgotPasswordDto) => {
    const user = await this.userService.getUserByEmail(data.email);

    if (!user) {
      throw new NotFoundException('Akun dengan email ini tidak ditemukan.');
    }

    const emailToken = randomBytes(32).toString('hex');

    await this.prisma.userToken.create({
      data: {
        userId: user.id,
        token: emailToken,
        type: 'PASSWORD_RESET',
      },
    });

    const resetPasswordUrl = `${process.env.APP_FRONTEND_URL}/auth/reset-password?token=${emailToken}`;

    try {
      await this.mailService.sendMail(
        user.email,
        'Reset Password',
        'reset-password',
        { user: user.full_name, resetPasswordUrl: resetPasswordUrl },
      );
    } catch (error) {
      console.error('sendMail error: ', error);
      throw new InternalServerErrorException(
        'Email gagal dikirim, coba lagi nanti',
      );
    }
  };

  resetPassword = async (token: string, data: ResetPasswordDto) => {
    const resetPasswordToken = await this.prisma.userToken.findUnique({
      where: {
        token,
        type: 'PASSWORD_RESET',
      },
    });

    if (!resetPasswordToken) {
      throw new BadRequestException('Token Invalid atau sudah kedaluwarsa.');
    }

    const user = await this.userService.getUserById(resetPasswordToken.userId);

    if (!user) {
      throw new NotFoundException('User tidak ditemukan');
    }

    await this.userService.updateUser(user.id, data);

    await this.prisma.userToken.delete({
      where: {
        id: resetPasswordToken.id,
      },
    });
  };
}
