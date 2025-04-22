import { IsString } from 'class-validator';

export class UpdateRoadFunctionDto {
  @IsString()
  name: string;
}
