import { CreateZoneDto } from './create-zone.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateZoneDto extends PartialType(CreateZoneDto) {}
