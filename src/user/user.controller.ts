import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRoleService } from 'src/user-role/user-role.service';
import { RoleService } from 'src/role/role.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/role/role.guard';
import { Roles } from 'src/role/role.decorator';

@Controller('users')
@UseGuards(AuthGuard, RoleGuard)
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly userRoleService: UserRoleService,
    private readonly roleService: RoleService,
  ) {}

  @Get()
  @Roles('admin', 'superadmin')
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get('by-id/:id')
  async getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Get('by-email/:email')
  @Roles('admin', 'superadmin')
  async getUserByEmail(@Param('email') email: string) {
    return this.userService.getUserByEmail(email);
  }

  @Post('create')
  @Roles('admin', 'superadmin')
  async createUser(@Body() data: CreateUserDto) {
    const newUser = await this.userService.createUser(data);

    if (data.role) {
      const role = await this.roleService.getRoleByName(data.role);

      const dto = {
        userId: newUser.id,
        roleId: role.id,
      };

      await this.userRoleService.createUserRole(dto);
    }

    return newUser;
  }
}
