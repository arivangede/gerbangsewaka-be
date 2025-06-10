import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';

@Controller('districts')
export class DistrictController {
  constructor(private readonly service: DistrictService) {}

  @Get()
  async getAll() {
    return this.service.getAll();
  }

  @Get('by-id/:id')
  async getById(@Param('id') id: number) {
    return this.service.getById(id);
  }

  @Post('create')
  async create(@Body() data: CreateDistrictDto) {
    await this.service.create(data);

    return {
      message: 'Data Kecamatan berhasil ditambahkan.',
    };
  }

  @Patch('edit/:id')
  async update(@Param('id') id: number, @Body() data: UpdateDistrictDto) {
    await this.service.update(id, data);

    return {
      message: 'Data Kecamatan berhasil di ubah.',
    };
  }

  @Delete('remove/:id')
  async remove(@Param('id') id: number) {
    await this.service.remove(id);

    return {
      message: 'Data Kecamatan berhasil di hapus.',
    };
  }
}
