import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserRoleModule } from 'src/user-role/user-role.module';
import { RoleModule } from 'src/role/role.module';

@Module({
  imports: [PrismaModule, UserRoleModule, RoleModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
