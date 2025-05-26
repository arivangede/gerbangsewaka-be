import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AreaService } from './area.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

@Controller('areas')
export class AreaController {
  constructor(private readonly areaService: AreaService) {}

  @Get()
  async getAllAreas() {
    return this.areaService.getAllAreas();
  }

  @Get(':id')
  async getAreaById(@Param('id') id: string) {
    return this.areaService.getAreaById(id);
  }

  @Post('create')
  async createArea(@Body() data: CreateAreaDto) {
    return this.areaService.createArea(data);
  }

  @Patch(':id')
  async updateArea(
    @Param('id') id: string,
    @Body() data: UpdateAreaDto,
  ) {
    return this.areaService.updateArea(id, data);
  }

  @Delete(':id')
  async deleteArea(@Param('id') id: string) {
    return this.areaService.deleteArea(id);
  }
}
