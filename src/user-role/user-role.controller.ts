import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/role/role.guard';
import { Roles } from 'src/role/role.decorator';

@Controller('user-roles')
@UseGuards(AuthGuard, RoleGuard)
@Roles('admin', 'superadmin')
export class UserRoleController {
  constructor(private readonly userRoleService: UserRoleService) {}

  @Get()
  async getAllUserRoles() {
    return this.userRoleService.getAllUserRoles();
  }

  @Get('by-id/:roleId')
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
