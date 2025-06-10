import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PolePointService } from './pole-point.service';
import { CreatePolePointDto } from './dto/create-pole.dto';
import { UpdatePolePointDto } from './dto/update-pole.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import * as fs from 'fs';
import { SearchPolePointDto } from './dto/search-pole.dto';

@Controller('pole-points')
export class PolePointController {
  constructor(private readonly service: PolePointService) {}

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  async search(@Query() query: SearchPolePointDto) {
    return this.service.searchPolePoints(query);
  }

  @Get('all')
  async getAll() {
    return this.service.getAll();
  }

  @Get('by-id/:id')
  async getById(@Param('id') id: string) {
    return this.service.getById(id);
  }

  @Get('filters')
  async getFilters() {
    return this.service.getFilters();
  }

  @Post('create')
  async create(@Body() data: CreatePolePointDto) {
    await this.service.create(data);
    return {
      message: 'Titik Tiang baru berhasil dibuat.',
    };
  }

  @Post('import-csv')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = path.extname(file.originalname);
          const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
          cb(null, filename);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (
          file.mimetype === 'text/csv' ||
          file.originalname.endsWith('.csv')
        ) {
          cb(null, true);
        } else {
          cb(new Error('Only CSV files are allowed!'), false);
        }
      },
    }),
  )
  async importCSV(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      return {
        message: 'No file uploaded.',
      };
    }

    const filePath = file.path;

    try {
      const result = await this.service.importCSV(filePath);
      return result;
    } finally {
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error('Error deleting file:', err);
        }
      });
    }
  }

  @Patch('edit/:id')
  async update(@Param('id') id: string, @Body() data: UpdatePolePointDto) {
    await this.service.update(id, data);
    return {
      message: 'Titik Tiang berhasil di ubah.',
    };
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    await this.service.remove(id);
    return {
      message: 'Titik Tiang berhasil di hapus.',
    };
  }
}
