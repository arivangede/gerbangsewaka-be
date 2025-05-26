import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { LampService } from './lamp.service';
import { CreateLampDto } from './dto/create-lamp.dto';
import { UpdateLampDto } from './dto/update-lamp.dto';

@Controller('lamps')
export class LampController {
  constructor(private readonly lampService: LampService) {}

  @Get()
  async getAllLamps() {
    return this.lampService.getAllLamps();
  }

  @Get(':id')
  async getLampById(@Param('id', ParseIntPipe) id: number) {
    return this.lampService.getLampById(id);
  }

  @Post('create')
  async createLamp(@Body() data: CreateLampDto) {
    return this.lampService.createLamp(data);
  }

  @Patch(':id')
  async updateLamp(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateLampDto,
  ) {
    return this.lampService.updateLamp(id, data);
  }

  @Delete(':id')
  async deleteLamp(@Param('id', ParseIntPipe) id: number) {
    return this.lampService.deleteLamp(id);
  }
}
