import { IsString } from 'class-validator';

export class CreateAreaDto {
  @IsString()
  name: string;
} 