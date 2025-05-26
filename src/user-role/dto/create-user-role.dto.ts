import { IsNumber, IsString } from 'class-validator';

export class CreateUserRoleDto {
  @IsString()
  userId: string;

  @IsNumber()
  roleId: number;
}
