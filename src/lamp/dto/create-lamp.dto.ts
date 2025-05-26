import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateLampDto {
  @IsNumber()
  @IsNotEmpty()
  streetlighting_id: number;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  power: string;
} 