import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { randomBytes } from 'crypto';
import { MailService } from 'src/mail/mail.service';

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

    await this.prisma.userVerificationToken.create({
      data: {
        userId: user.id,
        token: emailToken,
      },
    });

    const verificationUrl = `${process.env.APP_FRONTEND_URL}/auth/verify-email?token=${emailToken}`;

    await this.mailService.sendMail(
      user.email,
      'Email Verification',
      'verify-email',
      { user: user.full_name, verificationUrl: verificationUrl },
    );
  };

  verifyEmail = async (token: string) => {
    const verificationToken =
      await this.prisma.userVerificationToken.findUnique({
        where: { token },
      });

    if (!verificationToken) {
      throw new HttpException(
        'Invalid or expired token',
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.userService.verifyUser(verificationToken.userId);

    await this.prisma.userVerificationToken.delete({
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

    const payload = { sub: user.id, role: user.userRole?.role.id };
    const token = this.jwtService.sign(payload);

    return { message: 'Sign-In Berhasil', token, user };
  };
}
