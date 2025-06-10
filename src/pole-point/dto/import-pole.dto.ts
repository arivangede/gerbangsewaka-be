import { IsNotEmpty } from 'class-validator';

export class ImportPolePointsDto {
  @IsNotEmpty()
  zona: string;

  @IsNotEmpty()
  fungsi: string;

  @IsNotEmpty()
  kecamatan: string;

  @IsNotEmpty()
  group: string;

  @IsNotEmpty()
  namaJalan: string;

  @IsNotEmpty()
  tiangArm: string;

  @IsNotEmpty()
  daya: string;

  @IsNotEmpty()
  x: string;

  @IsNotEmpty()
  y: string;
}
