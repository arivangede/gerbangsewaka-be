import { PartialType } from '@nestjs/mapped-types';
import { IsDataURI, IsString } from 'class-validator';

class BaseUserDto {
  @IsString()
  full_name: string;

  @IsString()
  email: string;

  @IsDataURI()
  image: string;

  @IsString()
  phone: string;

  @IsString()
  password: string;
}

export class UpdateUserDto extends PartialType(BaseUserDto) {}
