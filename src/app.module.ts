import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './role/role.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { UserRoleModule } from './user-role/user-role.module';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { UserAreaAccessModule } from './user-area-access/user-area-access.module';
import { ZoneModule } from './zone/zone.module';
import { FunctionModule } from './function/function.module';
import { DistrictModule } from './district/district.module';
import { GroupModule } from './group/group.module';
import { PolePointModule } from './pole-point/pole-point.module';

@Module({
  imports: [
    RoleModule,
    PrismaModule,
    UserModule,
    UserRoleModule,
    AuthModule,
    MailModule,
    UserAreaAccessModule,
    ZoneModule,
    FunctionModule,
    DistrictModule,
    GroupModule,
    PolePointModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
