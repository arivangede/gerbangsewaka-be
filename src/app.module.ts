import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './role/role.module';
import { PrismaModule } from './prisma/prisma.module';
import { RoadFunctionModule } from './road-function/road-function.module';
import { UserModule } from './user/user.module';
import { UserRoleModule } from './user-role/user-role.module';
import { AuthModule } from './auth/auth.module';
import { AreaModule } from './area/area.module';
import { StreetLightModule } from './street-light/street-light.module';
import { StreetLightGroupModule } from './street-light-group/street-light-group.module';
import { LampModule } from './lamp/lamp.module';
import { StreetLightAccessoryModule } from './street-light-accessory/street-light-accessory.module';
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
    RoadFunctionModule,
    UserModule,
    UserRoleModule,
    AuthModule,
    AreaModule,
    StreetLightModule,
    StreetLightGroupModule,
    LampModule,
    StreetLightAccessoryModule,
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
