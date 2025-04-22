import { IsString } from 'class-validator';

export class CreateRoadFunctionDto {
  @IsString()
  name: string;
}
