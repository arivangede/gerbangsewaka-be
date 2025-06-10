import { Module } from '@nestjs/common';
import { UserAreaAccessService } from './user-area-access.service';
import { UserAreaAccessController } from './user-area-access.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from 'src/user/user.module';
import { DistrictModule } from 'src/district/district.module';

@Module({
  imports: [PrismaModule, UserModule, DistrictModule],
  providers: [UserAreaAccessService],
  controllers: [UserAreaAccessController],
})
export class UserAreaAccessModule {}
