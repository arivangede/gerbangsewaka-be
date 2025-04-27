import { IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateLampDto {
  @IsNumber()
  @IsOptional()
  streetlighting_id?: number;

  @IsString()
  @IsOptional()
  brand?: string;

  @IsString()
  @IsOptional()
  type?: string;

  @IsString()
  @IsOptional()
  power?: string;
} 