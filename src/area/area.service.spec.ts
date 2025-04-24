import { Test, TestingModule } from '@nestjs/testing';
import { AreaService } from './area.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

describe('AreaService', () => {
  let service: AreaService;
  let prisma: PrismaService;

  const mockPrismaService = {
    area: {
      findMany: jest.fn(),
      findFirst: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AreaService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<AreaService>(AreaService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllAreas', () => {
    it('should return all areas', async () => {
      const mockAreas = [
        { id: '1', name: 'Area 1', streetLightGroup: [] },
        { id: '2', name: 'Area 2', streetLightGroup: [] },
      ];

      mockPrismaService.area.findMany.mockResolvedValue(mockAreas);

      const result = await service.getAllAreas();
      expect(result).toEqual(mockAreas);
      expect(prisma.area.findMany).toHaveBeenCalledWith({
        include: { streetLightGroup: true },
      });
    });

    it('should throw NotFoundException when no areas found', async () => {
      mockPrismaService.area.findMany.mockResolvedValue([]);

      await expect(service.getAllAreas()).rejects.toThrow(NotFoundException);
    });
  });

  describe('getAreaById', () => {
    it('should return an area by id', async () => {
      const mockArea = { id: '1', name: 'Area 1', streetLightGroup: [] };
      mockPrismaService.area.findFirst.mockResolvedValue(mockArea);

      const result = await service.getAreaById('1');
      expect(result).toEqual(mockArea);
      expect(prisma.area.findFirst).toHaveBeenCalledWith({
        where: { id: '1' },
        include: { streetLightGroup: true },
      });
    });

    it('should throw NotFoundException when area not found', async () => {
      mockPrismaService.area.findFirst.mockResolvedValue(null);

      await expect(service.getAreaById('1')).rejects.toThrow(NotFoundException);
    });
  });

  describe('createArea', () => {
    it('should create a new area', async () => {
      const createAreaDto: CreateAreaDto = { name: 'New Area' };
      const mockArea = { id: '1', ...createAreaDto, streetLightGroup: [] };

      mockPrismaService.area.create.mockResolvedValue(mockArea);

      const result = await service.createArea(createAreaDto);
      expect(result).toEqual(mockArea);
      expect(prisma.area.create).toHaveBeenCalledWith({
        data: createAreaDto,
        include: { streetLightGroup: true },
      });
    });
  });

  describe('updateArea', () => {
    const updateAreaDto: UpdateAreaDto = { name: 'Updated Area' };

    it('should update an existing area', async () => {
      const mockArea = { id: '1', name: 'Old Area', streetLightGroup: [] };
      const updatedMockArea = { ...mockArea, ...updateAreaDto };

      mockPrismaService.area.findUnique.mockResolvedValue(mockArea);
      mockPrismaService.area.update.mockResolvedValue(updatedMockArea);

      const result = await service.updateArea('1', updateAreaDto);
      expect(result).toEqual(updatedMockArea);
      expect(prisma.area.update).toHaveBeenCalledWith({
        where: { id: '1' },
        data: updateAreaDto,
        include: { streetLightGroup: true },
      });
    });

    it('should throw NotFoundException when updating non-existing area', async () => {
      mockPrismaService.area.findUnique.mockResolvedValue(null);

      await expect(service.updateArea('1', updateAreaDto)).rejects.toThrow(
        NotFoundException,
      );
      expect(prisma.area.update).not.toHaveBeenCalled();
    });
  });

  describe('deleteArea', () => {
    it('should delete an existing area', async () => {
      const mockArea = { id: '1', name: 'Area', streetLightGroup: [] };

      mockPrismaService.area.findUnique.mockResolvedValue(mockArea);
      mockPrismaService.area.delete.mockResolvedValue(mockArea);

      const result = await service.deleteArea('1');
      expect(result).toEqual(mockArea);
      expect(prisma.area.delete).toHaveBeenCalledWith({
        where: { id: '1' },
        include: { streetLightGroup: true },
      });
    });

    it('should throw NotFoundException when deleting non-existing area', async () => {
      mockPrismaService.area.findUnique.mockResolvedValue(null);

      await expect(service.deleteArea('1')).rejects.toThrow(NotFoundException);
      expect(prisma.area.delete).not.toHaveBeenCalled();
    });

    it('should throw NotFoundException when deleting area with street light groups', async () => {
      const mockArea = {
        id: '1',
        name: 'Area',
        streetLightGroup: [{ id: 1, name: 'Group 1' }],
      };

      mockPrismaService.area.findUnique.mockResolvedValue(mockArea);

      await expect(service.deleteArea('1')).rejects.toThrow(NotFoundException);
      expect(prisma.area.delete).not.toHaveBeenCalled();
    });
  });
});
