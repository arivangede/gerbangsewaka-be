import { IsString } from 'class-validator';

export class CreateGroupDto {
  @IsString()
  code: string;
}
