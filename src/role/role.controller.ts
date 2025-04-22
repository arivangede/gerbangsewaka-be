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
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  async getAllRoles() {
    return this.roleService.getAllRoles();
  }

  @Get(':id')
  async getRoleById(@Param('id', ParseIntPipe) id: number) {
    return this.roleService.getRoleById(id);
  }

  @Post('create')
  async createRole(@Body() data: CreateRoleDto) {
    return this.roleService.createRole(data);
  }

  @Patch('update/:id')
  async updateRole(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateRoleDto,
  ) {
    return this.roleService.updateRole(id, data);
  }

  @Delete('delete/:id')
  async deleteRole(@Param('id', ParseIntPipe) id: number) {
    return this.roleService.deleteRole(id);
  }
}
