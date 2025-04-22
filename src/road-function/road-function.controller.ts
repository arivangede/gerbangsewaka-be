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
import { RoadFunctionService } from './road-function.service';
import { CreateRoadFunctionDto } from './dto/create-road-function.dto';
import { UpdateRoadFunctionDto } from './dto/update-road-function.dto';

@Controller('road-functions')
export class RoadFunctionController {
  constructor(private readonly roadFunctionService: RoadFunctionService) {}

  @Get()
  async getAllRoadFunctions() {
    return this.roadFunctionService.getAllRoadFunctions();
  }

  @Get(':id')
  async getRoadFunctionById(@Param('id', ParseIntPipe) id: number) {
    return this.roadFunctionService.getRoadFunctionById(id);
  }

  @Post('create')
  async createRoadFunction(@Body() data: CreateRoadFunctionDto) {
    return this.roadFunctionService.createRoadFunction(data);
  }

  @Patch('update/:id')
  async updateRoadFunction(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateRoadFunctionDto,
  ) {
    return this.roadFunctionService.updateRoadFunction(id, data);
  }

  @Delete('delete/:id')
  async deleteRoadFunction(@Param('id', ParseIntPipe) id: number) {
    return this.roadFunctionService.deleteRoadFunction(id);
  }
}
