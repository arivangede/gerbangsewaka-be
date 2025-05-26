import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateStreetLightAccessoryDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  streetlighting_id?: number;
} 