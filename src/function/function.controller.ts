import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FunctionService } from './function.service';
import { CreateFunctionDto } from './dto/create-function.dto';
import { UpdateFunctionDto } from './dto/update-function.dto';

@Controller('functions')
export class FunctionController {
  constructor(private readonly service: FunctionService) {}

  @Get()
  async getAll() {
    return this.service.getAll();
  }

  @Get('by-id/:id')
  async getById(@Param('id') id: number) {
    return this.service.getById(id);
  }

  @Post('create')
  async create(@Body() data: CreateFunctionDto) {
    await this.service.create(data);

    return {
      message: 'Fungsi baru berhasil dibuat.',
    };
  }

  @Patch('edit/:id')
  async update(@Param('id') id: number, data: UpdateFunctionDto) {
    await this.service.update(id, data);

    return {
      message: 'Fungsi berhasil di ubah.',
    };
  }

  @Delete('remove/:id')
  async remove(@Param('id') id: number) {
    await this.service.remove(id);

    return {
      message: 'Fungsi berhasil di hapus.',
    };
  }
}
