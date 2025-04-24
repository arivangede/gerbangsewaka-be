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
import { StreetLightGroupService } from './street-light-group.service';
import { CreateStreetLightGroupDto } from './dto/create-street-light-group.dto';
import { UpdateStreetLightGroupDto } from './dto/update-street-light-group.dto';

@Controller('street-light-groups')
export class StreetLightGroupController {
  constructor(private readonly streetLightGroupService: StreetLightGroupService) {}

  @Get()
  async getAllStreetLightGroups() {
    return this.streetLightGroupService.getAllStreetLightGroups();
  }

  @Get(':id')
  async getStreetLightGroupById(@Param('id', ParseIntPipe) id: number) {
    return this.streetLightGroupService.getStreetLightGroupById(id);
  }

  @Post('create')
  async createStreetLightGroup(@Body() data: CreateStreetLightGroupDto) {
    return this.streetLightGroupService.createStreetLightGroup(data);
  }

  @Patch(':id')
  async updateStreetLightGroup(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateStreetLightGroupDto,
  ) {
    return this.streetLightGroupService.updateStreetLightGroup(id, data);
  }

  @Delete(':id')
  async deleteStreetLightGroup(@Param('id', ParseIntPipe) id: number) {
    return this.streetLightGroupService.deleteStreetLightGroup(id);
  }
}
