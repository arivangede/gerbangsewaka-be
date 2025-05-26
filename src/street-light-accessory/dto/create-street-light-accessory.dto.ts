import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStreetLightAccessoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  streetlighting_id: number;
} 