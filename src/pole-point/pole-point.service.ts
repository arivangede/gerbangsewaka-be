import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePolePointDto } from './dto/create-pole.dto';
import { UpdatePolePointDto } from './dto/update-pole.dto';
import { ImportPolePointsDto } from './dto/import-pole.dto';
import * as fs from 'fs';
import * as csvParser from 'csv-parser';
import { ZoneService } from 'src/zone/zone.service';
import { FunctionService } from 'src/function/function.service';
import { DistrictService } from 'src/district/district.service';
import { GroupService } from 'src/group/group.service';
import { SearchPolePointDto } from './dto/search-pole.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class PolePointService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly zoneService: ZoneService,
    private readonly functionService: FunctionService,
    private readonly districtService: DistrictService,
    private readonly groupService: GroupService,
  ) {}

  getAll = async () => {
    return this.prisma.polePoint.findMany({
      select: {
        id: true,
        poleCode: true,
        power: true,
        latitude: true,
        longitude: true,
        streetName: true,
        type: true,
        zone: {
          select: {
            id: true,
            name: true,
          },
        },
        function: {
          select: {
            id: true,
            name: true,
          },
        },
        district: {
          select: {
            id: true,
            name: true,
          },
        },
        group: {
          select: {
            id: true,
            code: true,
          },
        },
      },
    });
  };

  getById = async (id: string) => {
    const polePoint = await this.prisma.polePoint.findUnique({
      where: {
        id,
      },
    });

    if (!polePoint) {
      throw new NotFoundException('Pole Point not found.');
    }

    return polePoint;
  };

  create = async (data: CreatePolePointDto) => {
    return this.prisma.polePoint.create({
      data,
    });
  };

  update = async (id: string, data: UpdatePolePointDto) => {
    const polePoint = await this.getById(id);

    return this.prisma.polePoint.update({
      where: {
        id: polePoint.id,
      },
      data,
    });
  };

  remove = async (id: string) => {
    const polePoint = await this.getById(id);

    return this.prisma.polePoint.delete({
      where: {
        id: polePoint.id,
      },
    });
  };

  importCSV = async (
    filePath: string,
  ): Promise<{ message: string; success: number; failed: number }> => {
    const results: ImportPolePointsDto[] = [];

    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (data: Record<string, string>) => {
          const cleaned: Partial<ImportPolePointsDto> = {};

          for (const key in data) {
            const normalizedKey = key.trim().toLowerCase().replace(/\s+/g, '');
            const value = data[key]?.trim();

            switch (normalizedKey) {
              case 'zona':
                cleaned.zona = value;
                break;
              case 'fungsi':
                cleaned.fungsi = value;
                break;
              case 'kecamatan':
                cleaned.kecamatan = value;
                break;
              case 'group':
                cleaned.group = value;
                break;
              case 'namajalan':
                cleaned.namaJalan = value;
                break;
              case 'tiang/arm':
              case 'tiangarm':
                cleaned.tiangArm = value;
                break;
              case 'daya':
                cleaned.daya = value;
                break;
              case 'x':
                cleaned.x = value;
                break;
              case 'y':
                cleaned.y = value;
                break;
            }
          }

          if (
            cleaned.zona &&
            cleaned.fungsi &&
            cleaned.kecamatan &&
            cleaned.group &&
            cleaned.namaJalan &&
            cleaned.tiangArm &&
            cleaned.daya &&
            cleaned.x &&
            cleaned.y
          ) {
            results.push(cleaned as ImportPolePointsDto);
          }
        })
        .on('end', () => {
          this.processRow(results).then(resolve).catch(reject);
        })
        .on('error', reject);
    });
  };

  private async processRow(rows: ImportPolePointsDto[]) {
    let success = 0;
    let failed = 0;

    for (const row of rows) {
      try {
        const zone = await this.zoneService.upsert(row.zona);
        const func = await this.functionService.upsert(row.fungsi);
        const district = await this.districtService.upsert(row.kecamatan);
        const group = await this.groupService.upsert(row.group);

        const latitude = parseFloat(row.x.replace(',', '.').replace(/\s/g, ''));
        const longitude = parseFloat(
          row.y.replace(',', '.').replace(/\s/g, ''),
        );

        if (isNaN(latitude) || isNaN(longitude)) {
          throw new Error(
            `Invalid latitude or longitude in row: ${JSON.stringify(row)}`,
          );
        }

        await this.prisma.polePoint.create({
          data: {
            poleCode: row.tiangArm,
            power: row.daya,
            latitude,
            longitude,
            streetName: row.namaJalan,
            zoneId: zone.id,
            functionId: func.id,
            districtId: district.id,
            groupId: group.id,
            type:
              row.fungsi.toLowerCase() === 'panel' ? 'PANEL' : 'STREET_LIGHT',
          },
        });

        success++;
      } catch (error) {
        console.error('Error processing row:', row, (error as Error).message);
        failed++;
      }
    }

    return { message: 'Import Completed', success, failed };
  }

  searchPolePoints = async (query: SearchPolePointDto) => {
    const {
      search,
      groupId,
      districtId,
      zoneId,
      functionId,
      page = 1,
      limit = 10,
    } = query;

    const skip = (page - 1) * limit;

    const where = {
      ...(search && {
        streetName: {
          contains: search,
          mode: 'insensitive' as Prisma.QueryMode,
        },
      }),
      ...(groupId && { groupId }),
      ...(districtId && { districtId }),
      ...(zoneId && { zoneId }),
      ...(functionId && { functionId }),
    };

    const [tableRows, polePoints] = await Promise.all([
      this.prisma.polePoint.findMany({
        where,
        select: {
          id: true,
          poleCode: true,
          power: true,
          latitude: true,
          longitude: true,
          streetName: true,
          type: true,
          zone: {
            select: {
              id: true,
              name: true,
            },
          },
          function: {
            select: {
              id: true,
              name: true,
            },
          },
          district: {
            select: {
              id: true,
              name: true,
            },
          },
          group: {
            select: {
              id: true,
              code: true,
            },
          },
        },
        skip,
        take: limit,
      }),
      this.prisma.polePoint.findMany({
        where,
        select: {
          id: true,
          poleCode: true,
          power: true,
          latitude: true,
          longitude: true,
          streetName: true,
          type: true,
          zone: {
            select: {
              id: true,
              name: true,
            },
          },
          function: {
            select: {
              id: true,
              name: true,
            },
          },
          district: {
            select: {
              id: true,
              name: true,
            },
          },
          group: {
            select: {
              id: true,
              code: true,
            },
          },
        },
      }),
    ]);

    const totalPages = Math.ceil(tableRows.length / limit);

    return {
      polePoints,
      rows: tableRows,
      pagination: {
        total: polePoints.length,
        page,
        limit,
        totalPages,
      },
    };
  };

  getFilters = async () => {
    const [zones, functions, districts, groups] = await Promise.all([
      this.zoneService.getAll(),
      this.functionService.getAll(),
      this.districtService.getAll(),
      this.groupService.getAll(),
    ]);

    return {
      zones,
      functions,
      districts,
      groups,
    };
  };
}
