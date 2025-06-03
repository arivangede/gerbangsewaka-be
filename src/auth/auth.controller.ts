import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Get('verify-email')
  async verifyEmail(@Query('token') token: string) {
    return this.service.verifyEmail(token);
  }

  @Post('register')
  async register(@Body() data: RegisterDto) {
    return this.service.register(data);
  }

  @Post('login')
  async login(@Body() data: LoginDto) {
    return this.service.login(data);
  }

  @Post('forgot-password')
  async forgotPassword(@Body() data: ForgotPasswordDto) {
    await this.service.forgotPassword(data);

    return {
      message:
        'Email reset password berhasil dikirim, silahkan cek email anda.',
    };
  }

  @Patch('reset-password')
  async resetPassword(
    @Query('token') token: string,
    @Body() data: ResetPasswordDto,
  ) {
    await this.service.resetPassword(token, data);

    return {
      message: 'Password berhasil di reset, silahkan login kembali.',
    };
  }
}
