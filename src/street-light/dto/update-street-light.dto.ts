import { IsOptional, IsNumber, IsString, IsEnum } from 'class-validator';
import { StreetLightStatus } from '@prisma/client';

export class UpdateStreetLightDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  latitude?: number;

  @IsNumber()
  @IsOptional()
  longitude?: number;

  @IsNumber()
  @IsOptional()
  roadfunction_id?: number;

  @IsNumber()
  @IsOptional()
  group_id?: number;

  @IsString()
  @IsOptional()
  poleType?: string;

  @IsString()
  @IsOptional()
  poleHeight?: string;

  @IsString()
  @IsOptional()
  poleMaterial?: string;

  @IsEnum(StreetLightStatus)
  @IsOptional()
  status?: StreetLightStatus;

  @IsString()
  @IsOptional()
  location?: string;
} 