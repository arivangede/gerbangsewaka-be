import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ZoneService } from './zone.service';
import { CreateZoneDto } from './dto/create-zone.dto';
import { UpdateZoneDto } from './dto/update-zone.dto';

@Controller('zones')
export class ZoneController {
  constructor(private readonly service: ZoneService) {}

  @Get()
  async getAll() {
    return this.service.getAll();
  }

  @Get('by-id/:id')
  async getById(@Param('id') id: number) {
    return this.service.getById(id);
  }

  @Post('create')
  async create(@Body() data: CreateZoneDto) {
    await this.service.create(data);

    return {
      message: 'Zone baru berhasil dibuat.',
    };
  }

  @Patch('edit/:id')
  async update(@Param('id') id: number, @Body() data: UpdateZoneDto) {
    await this.service.update(id, data);

    return {
      message: 'Zone berhasil di ubah.',
    };
  }

  @Delete('remove/:id')
  async remove(@Param('id') id: number) {
    await this.service.remove(id);

    return {
      message: 'Zone berhasil di hapus',
    };
  }
}
