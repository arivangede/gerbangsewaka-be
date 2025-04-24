import { IsString, IsNotEmpty } from 'class-validator';

export class CreateStreetLightGroupDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  area_id: string;
} 