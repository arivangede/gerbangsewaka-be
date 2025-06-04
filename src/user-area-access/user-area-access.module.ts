import { Module } from '@nestjs/common';
import { UserAreaAccessService } from './user-area-access.service';
import { UserAreaAccessController } from './user-area-access.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from 'src/user/user.module';
import { AreaModule } from 'src/area/area.module';

@Module({
  imports: [PrismaModule, UserModule, AreaModule],
  providers: [UserAreaAccessService],
  controllers: [UserAreaAccessController],
})
export class UserAreaAccessModule {}
