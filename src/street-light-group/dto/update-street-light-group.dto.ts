import { IsString, IsOptional } from 'class-validator';

export class UpdateStreetLightGroupDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  area_id?: string;
} 