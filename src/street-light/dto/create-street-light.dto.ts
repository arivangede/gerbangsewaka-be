import { IsNotEmpty, IsNumber, IsOptional, IsString, IsEnum } from 'class-validator';
import { StreetLightStatus } from '@prisma/client';

export class CreateStreetLightDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  latitude: number;

  @IsNumber()
  @IsNotEmpty()
  longitude: number;

  @IsNumber()
  @IsNotEmpty()
  roadfunction_id: number;

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
  @IsNotEmpty()
  status: StreetLightStatus;

  @IsString()
  @IsNotEmpty()
  location: string;
} 