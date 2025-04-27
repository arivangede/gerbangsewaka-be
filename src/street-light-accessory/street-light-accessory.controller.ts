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
import { StreetLightAccessoryService } from './street-light-accessory.service';
import { CreateStreetLightAccessoryDto } from './dto/create-street-light-accessory.dto';
import { UpdateStreetLightAccessoryDto } from './dto/update-street-light-accessory.dto';

@Controller('street-light-accessories')
export class StreetLightAccessoryController {
  constructor(
    private readonly streetLightAccessoryService: StreetLightAccessoryService,
  ) {}

  @Get()
  async getAllStreetLightAccessories() {
    return this.streetLightAccessoryService.getAllStreetLightAccessories();
  }

  @Get(':id')
  async getStreetLightAccessoryById(@Param('id', ParseIntPipe) id: number) {
    return this.streetLightAccessoryService.getStreetLightAccessoryById(id);
  }

  @Post('create')
  async createStreetLightAccessory(@Body() data: CreateStreetLightAccessoryDto) {
    return this.streetLightAccessoryService.createStreetLightAccessory(data);
  }

  @Patch(':id')
  async updateStreetLightAccessory(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateStreetLightAccessoryDto,
  ) {
    return this.streetLightAccessoryService.updateStreetLightAccessory(id, data);
  }

  @Delete(':id')
  async deleteStreetLightAccessory(@Param('id', ParseIntPipe) id: number) {
    return this.streetLightAccessoryService.deleteStreetLightAccessory(id);
  }
}
