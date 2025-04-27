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
import { StreetLightService } from './street-light.service';
import { CreateStreetLightDto } from './dto/create-street-light.dto';
import { UpdateStreetLightDto } from './dto/update-street-light.dto';

@Controller('street-lights')
export class StreetLightController {
  constructor(private readonly streetLightService: StreetLightService) {}

  @Get()
  async getAllStreetLights() {
    return this.streetLightService.getAllStreetLights();
  }

  @Get(':id')
  async getStreetLightById(@Param('id', ParseIntPipe) id: number) {
    return this.streetLightService.getStreetLightById(id);
  }

  @Post('create')
  async createStreetLight(@Body() data: CreateStreetLightDto) {
    return this.streetLightService.createStreetLight(data);
  }

  @Patch(':id')
  async updateStreetLight(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateStreetLightDto,
  ) {
    return this.streetLightService.updateStreetLight(id, data);
  }

  @Delete(':id')
  async deleteStreetLight(@Param('id', ParseIntPipe) id: number) {
    return this.streetLightService.deleteStreetLight(id);
  }
}
