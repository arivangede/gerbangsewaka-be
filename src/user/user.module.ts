import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRoleService } from 'src/user-role/user-role.service';
import { RoleService } from 'src/role/role.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, UserRoleService, RoleService],
})
export class UserModule {}
