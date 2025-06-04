import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PolePointService } from './pole-point.service';
import { CreatePolePointDto } from './dto/create-pole.dto';
import { UpdatePolePointDto } from './dto/update-pole.dto';

@Controller('pole-points')
export class PolePointController {
  constructor(private readonly service: PolePointService) {}

  @Get()
  async getAll() {
    return this.service.getAll();
  }

  @Get('by-id/:id')
  async getById(@Param('id') id: string) {
    return this.service.getById(id);
  }

  @Post('create')
  async create(@Body() data: CreatePolePointDto) {
    await this.service.create(data);
    return {
      message: 'Titik Tiang baru berhasil dibuat.',
    };
  }

  @Patch('edit/:id')
  async update(@Param('id') id: string, @Body() data: UpdatePolePointDto) {
    await this.service.update(id, data);
    return {
      message: 'Titik Tiang berhasil di ubah.',
    };
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    await this.service.remove(id);
    return {
      message: 'Titik Tiang berhasil di hapus.',
    };
  }
}
