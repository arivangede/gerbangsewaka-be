import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/role/role.decorator';
import { RoleGuard } from 'src/role/role.guard';
import { UserAreaAccessService } from './user-area-access.service';
import { CreateAccessDto } from './dto/create-access.dto';

@Controller('user-area-access')
@UseGuards(AuthGuard, RoleGuard)
export class UserAreaAccessController {
  constructor(private readonly service: UserAreaAccessService) {}

  @Get('by-user/:userId')
  @Roles('admin', 'client')
  async getAccessesByUser(@Param('userId') userId: string) {
    return this.service.getUserAreaAccessByUserId(userId);
  }

  @Post('create')
  @Roles('admin')
  async create(@Body() data: CreateAccessDto) {
    await this.service.createAccess(data);

    return {
      message: 'Berhasil memberikan akses area.',
    };
  }

  @Delete('remove/:id')
  @Roles('admin')
  async remove(@Param('id') id: number) {
    await this.service.removeAccess(id);

    return {
      message: 'Berhasil menghapus akses area.',
    };
  }
}
