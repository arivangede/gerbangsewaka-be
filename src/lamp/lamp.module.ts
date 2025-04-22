import { Module } from '@nestjs/common';
import { LampController } from './lamp.controller';
import { LampService } from './lamp.service';

@Module({
  controllers: [LampController],
  providers: [LampService]
})
export class LampModule {}
