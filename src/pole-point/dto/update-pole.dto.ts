import { PartialType } from '@nestjs/mapped-types';
import { CreatePolePointDto } from './create-pole.dto';

export class UpdatePolePointDto extends PartialType(CreatePolePointDto) {}
