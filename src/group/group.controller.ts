import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Controller('groups')
export class GroupController {
  constructor(private readonly service: GroupService) {}

  @Get()
  async getAll() {
    return this.service.getAll();
  }

  @Get('by-id/:id')
  async getById(@Param('id') id: number) {
    return this.service.getById(id);
  }

  @Post('create')
  async create(@Body() data: CreateGroupDto) {
    await this.service.create(data);

    return {
      message: 'Group berhasil dibuat',
    };
  }

  @Patch('edit/:id')
  async update(@Param('id') id: number, @Body() data: UpdateGroupDto) {
    await this.service.update(id, data);

    return {
      message: 'Group berhasil di ubah.',
    };
  }

  @Delete('remove/:id')
  async remove(@Param('id') id: number) {
    await this.service.remove(id);

    return {
      message: 'Group berhasil di hapus',
    };
  }
}
