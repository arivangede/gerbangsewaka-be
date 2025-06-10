import { IsString } from 'class-validator';

export class CreateAccessDto {
  @IsString()
  userId: string;

  @IsString()
  districtId: number;
}
