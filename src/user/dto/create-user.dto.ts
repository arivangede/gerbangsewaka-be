import { IsDataURI, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  full_name: string;

  @IsString()
  email: string;

  @IsDataURI()
  image?: string;

  @IsString()
  phone?: string;

  @IsString()
  password: string;

  @IsString()
  role?: string;
}
