import { PolePointType } from '@prisma/client';
import { IsNumber, IsString } from 'class-validator';

export class CreatePolePointDto {
  @IsString()
  type: PolePointType;
  @IsString()
  streetName: string;
  @IsString()
  poleCode: string;
  @IsString()
  power: string;
  @IsNumber()
  latitude: number;
  @IsNumber()
  longitude: number;
  @IsNumber()
  zoneId: number;
  @IsNumber()
  functionId: number;
  @IsNumber()
  districtId: number;
  @IsNumber()
  groupId: number;
}
