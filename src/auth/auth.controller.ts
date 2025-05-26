import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

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
}
