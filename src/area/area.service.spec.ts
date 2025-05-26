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
        { 
          id: 'e1f2a3b4-c5d6-4e7f-8g9h-0i1j2k3l4m5n', 
          name: 'Denpasar', 
          streetLightGroup: [] 
        },
        { 
          id: 'f2e3d4c5-b6a7-8g9h-0i1j-2k3l4m5n6o7p', 
          name: 'Gianyar', 
          streetLightGroup: [] 
        },
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
    const mockUUID = 'e1f2a3b4-c5d6-4e7f-8g9h-0i1j2k3l4m5n';

    it('should return an area by id', async () => {
      const mockArea = { 
        id: mockUUID, 
        name: 'Denpasar', 
        streetLightGroup: [] 
      };
      mockPrismaService.area.findFirst.mockResolvedValue(mockArea);

      const result = await service.getAreaById(mockUUID);
      expect(result).toEqual(mockArea);
      expect(prisma.area.findFirst).toHaveBeenCalledWith({
        where: { id: mockUUID },
        include: { streetLightGroup: true },
      });
    });

    it('should throw NotFoundException when area not found', async () => {
      mockPrismaService.area.findFirst.mockResolvedValue(null);

      await expect(service.getAreaById(mockUUID)).rejects.toThrow(NotFoundException);
    });
  });

  describe('createArea', () => {
    it('should create a new area', async () => {
      const createAreaDto: CreateAreaDto = { name: 'Badung' };
      const mockArea = { 
        id: 'g3h4i5j6-k7l8-9m0n-1o2p-3q4r5s6t7u8v', 
        ...createAreaDto, 
        streetLightGroup: [] 
      };

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
    const mockUUID = 'e1f2a3b4-c5d6-4e7f-8g9h-0i1j2k3l4m5n';
    const updateAreaDto: UpdateAreaDto = { name: 'Denpasar Selatan' };

    it('should update an existing area', async () => {
      const mockArea = { 
        id: mockUUID, 
        name: 'Denpasar', 
        streetLightGroup: [] 
      };
      const updatedMockArea = { ...mockArea, ...updateAreaDto };

      mockPrismaService.area.findUnique.mockResolvedValue(mockArea);
      mockPrismaService.area.update.mockResolvedValue(updatedMockArea);

      const result = await service.updateArea(mockUUID, updateAreaDto);
      expect(result).toEqual(updatedMockArea);
      expect(prisma.area.update).toHaveBeenCalledWith({
        where: { id: mockUUID },
        data: updateAreaDto,
        include: { streetLightGroup: true },
      });
    });

    it('should throw NotFoundException when updating non-existing area', async () => {
      mockPrismaService.area.findUnique.mockResolvedValue(null);

      await expect(service.updateArea(mockUUID, updateAreaDto)).rejects.toThrow(
        NotFoundException,
      );
      expect(prisma.area.update).not.toHaveBeenCalled();
    });
  });

  describe('deleteArea', () => {
    const mockUUID = 'e1f2a3b4-c5d6-4e7f-8g9h-0i1j2k3l4m5n';

    it('should delete an existing area', async () => {
      const mockArea = { 
        id: mockUUID, 
        name: 'Denpasar', 
        streetLightGroup: [] 
      };

      mockPrismaService.area.findUnique.mockResolvedValue(mockArea);
      mockPrismaService.area.delete.mockResolvedValue(mockArea);

      const result = await service.deleteArea(mockUUID);
      expect(result).toEqual(mockArea);
      expect(prisma.area.delete).toHaveBeenCalledWith({
        where: { id: mockUUID },
        include: { streetLightGroup: true },
      });
    });

    it('should throw NotFoundException when deleting non-existing area', async () => {
      mockPrismaService.area.findUnique.mockResolvedValue(null);

      await expect(service.deleteArea(mockUUID)).rejects.toThrow(NotFoundException);
      expect(prisma.area.delete).not.toHaveBeenCalled();
    });

    it('should throw NotFoundException when deleting area with street light groups', async () => {
      const mockArea = {
        id: mockUUID,
        name: 'Denpasar',
        streetLightGroup: [{ 
          id: 1, 
          name: 'Kelompok Lampu Jalan Denpasar Utara' 
        }],
      };

      mockPrismaService.area.findUnique.mockResolvedValue(mockArea);

      await expect(service.deleteArea(mockUUID)).rejects.toThrow(NotFoundException);
      expect(prisma.area.delete).not.toHaveBeenCalled();
    });
  });
});
