import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';

@Controller('user-roles')
export class UserRoleController {
  constructor(private readonly userRoleService: UserRoleService) {}

  @Get()
  async getAllUserRoles() {
    return this.userRoleService.getAllUserRoles();
  }

  @Get('by-role/:roleId')
  async getUserRolesByRoleId(@Param('roleId') roleId: number) {
    return this.userRoleService.getUserRolesByRoleId(roleId);
  }

  @Patch(':id')
  async updateUserRole(
    @Param('id') id: string,
    @Body() data: UpdateUserRoleDto,
  ) {
    return this.userRoleService.updateUserRole(id, data);
  }
}
