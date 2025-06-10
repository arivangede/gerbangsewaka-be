import { IsString } from 'class-validator';

export class CreateFunctionDto {
  @IsString()
  name: string;
}
