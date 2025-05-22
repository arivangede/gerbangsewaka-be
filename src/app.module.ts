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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
