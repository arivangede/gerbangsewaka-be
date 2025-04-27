import { Test, TestingModule } from '@nestjs/testing';
import { StreetLightAccessoryService } from './street-light-accessory.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';
import { CreateStreetLightAccessoryDto } from './dto/create-street-light-accessory.dto';
import { UpdateStreetLightAccessoryDto } from './dto/update-street-light-accessory.dto';
import { StreetLightStatus } from '@prisma/client';

describe('StreetLightAccessoryService', () => {
  let service: StreetLightAccessoryService;
  let prismaService: PrismaService;

  const mockPrismaService = {
    streetLightAccessory: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    streetLight: {
      findUnique: jest.fn(),
    },
  };

  const mockDate = new Date();
  const mockStreetLight = {
    id: 1,
    name: 'Street Light 1',
    createdAt: mockDate,
    updatedAt: mockDate,
    latitude: 0,
    longitude: 0,
    roadfunction_id: 1,
    group_id: null,
    poleType: null,
    poleHeight: null,
    poleMaterial: null,
    status: StreetLightStatus.Active,
    location: 'Test Location',
  };

  const mockAccessory = {
    id: 1,
    name: 'Test Accessory',
    streetlighting_id: 1,
    createdAt: mockDate,
    updatedAt: mockDate,
    streetLight: mockStreetLight,
  };

  const mockAccessories = [
    mockAccessory,
    {
      ...mockAccessory,
      id: 2,
      name: 'Test Accessory 2',
      streetlighting_id: 2,
      streetLight: { ...mockStreetLight, id: 2 },
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StreetLightAccessoryService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<StreetLightAccessoryService>(StreetLightAccessoryService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllStreetLightAccessories', () => {
    it('should return all accessories', async () => {
      mockPrismaService.streetLightAccessory.findMany.mockResolvedValue(mockAccessories);

      const result = await service.getAllStreetLightAccessories();

      expect(result).toEqual(mockAccessories);
      expect(mockPrismaService.streetLightAccessory.findMany).toHaveBeenCalledWith({
        include: { streetLight: true },
      });
    });

    it('should throw NotFoundException if no accessories found', async () => {
      mockPrismaService.streetLightAccessory.findMany.mockResolvedValue([]);

      await expect(service.getAllStreetLightAccessories()).rejects.toThrow(
        new NotFoundException('No street light accessories found'),
      );
    });
  });

  describe('getStreetLightAccessoryById', () => {
    it('should return the accessory if found', async () => {
      mockPrismaService.streetLightAccessory.findUnique.mockResolvedValue(mockAccessory);

      const result = await service.getStreetLightAccessoryById(1);

      expect(result).toEqual(mockAccessory);
      expect(mockPrismaService.streetLightAccessory.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
        include: { streetLight: true },
      });
    });

    it('should throw NotFoundException if accessory not found', async () => {
      mockPrismaService.streetLightAccessory.findUnique.mockResolvedValue(null);

      await expect(service.getStreetLightAccessoryById(999)).rejects.toThrow(
        new NotFoundException('Street light accessory with ID 999 not found'),
      );
    });
  });

  describe('createStreetLightAccessory', () => {
    it('should create and return a new accessory', async () => {
      const createDto: CreateStreetLightAccessoryDto = {
        name: 'New Accessory',
        streetlighting_id: 1,
      };

      mockPrismaService.streetLight.findUnique.mockResolvedValue(mockStreetLight);
      mockPrismaService.streetLightAccessory.create.mockResolvedValue({
        id: 3,
        ...createDto,
        createdAt: mockDate,
        updatedAt: mockDate,
        streetLight: mockStreetLight,
      });

      const result = await service.createStreetLightAccessory(createDto);

      expect(result).toHaveProperty('id', 3);
      expect(result).toHaveProperty('name', 'New Accessory');
      expect(result).toHaveProperty('streetLight');
      expect(mockPrismaService.streetLight.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
      expect(mockPrismaService.streetLightAccessory.create).toHaveBeenCalledWith({
        data: createDto,
        include: { streetLight: true },
      });
    });

    it('should throw NotFoundException if related street light not found', async () => {
      const createDto: CreateStreetLightAccessoryDto = {
        name: 'New Accessory',
        streetlighting_id: 999,
      };

      mockPrismaService.streetLight.findUnique.mockResolvedValue(null);

      await expect(service.createStreetLightAccessory(createDto)).rejects.toThrow(
        new NotFoundException('Street light with ID 999 not found'),
      );
      
      expect(mockPrismaService.streetLightAccessory.create).not.toHaveBeenCalled();
    });
  });

  describe('updateStreetLightAccessory', () => {
    it('should update and return the accessory', async () => {
      const updateDto: UpdateStreetLightAccessoryDto = {
        name: 'Updated Accessory',
      };

      mockPrismaService.streetLightAccessory.findUnique.mockResolvedValue(mockAccessory);
      mockPrismaService.streetLightAccessory.update.mockResolvedValue({
        ...mockAccessory,
        name: 'Updated Accessory',
      });

      const result = await service.updateStreetLightAccessory(1, updateDto);

      expect(result).toHaveProperty('name', 'Updated Accessory');
      expect(mockPrismaService.streetLightAccessory.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: updateDto,
        include: { streetLight: true },
      });
    });

    it('should check if the new street light exists when provided', async () => {
      const updateDto: UpdateStreetLightAccessoryDto = {
        name: 'Updated Accessory',
        streetlighting_id: 2,
      };

      mockPrismaService.streetLightAccessory.findUnique.mockResolvedValue(mockAccessory);
      mockPrismaService.streetLight.findUnique.mockResolvedValue(mockStreetLight);
      mockPrismaService.streetLightAccessory.update.mockResolvedValue({
        ...mockAccessory,
        name: 'Updated Accessory',
        streetlighting_id: 2,
      });

      const result = await service.updateStreetLightAccessory(1, updateDto);

      expect(result).toHaveProperty('name', 'Updated Accessory');
      expect(result).toHaveProperty('streetlighting_id', 2);
      expect(mockPrismaService.streetLight.findUnique).toHaveBeenCalledWith({
        where: { id: 2 },
      });
    });

    it('should throw NotFoundException if street light accessory not found', async () => {
      mockPrismaService.streetLightAccessory.findUnique.mockResolvedValue(null);

      await expect(
        service.updateStreetLightAccessory(999, { name: 'Updated' }),
      ).rejects.toThrow(new NotFoundException('Street light accessory with ID 999 not found'));
      
      expect(mockPrismaService.streetLightAccessory.update).not.toHaveBeenCalled();
    });

    it('should throw NotFoundException if new street light not found', async () => {
      const updateDto: UpdateStreetLightAccessoryDto = {
        streetlighting_id: 999,
      };

      mockPrismaService.streetLightAccessory.findUnique.mockResolvedValue(mockAccessory);
      mockPrismaService.streetLight.findUnique.mockResolvedValue(null);

      await expect(service.updateStreetLightAccessory(1, updateDto)).rejects.toThrow(
        new NotFoundException('Street light with ID 999 not found'),
      );
      
      expect(mockPrismaService.streetLightAccessory.update).not.toHaveBeenCalled();
    });
  });

  describe('deleteStreetLightAccessory', () => {
    it('should delete and return the accessory', async () => {
      mockPrismaService.streetLightAccessory.findUnique.mockResolvedValue(mockAccessory);
      mockPrismaService.streetLightAccessory.delete.mockResolvedValue(mockAccessory);

      const result = await service.deleteStreetLightAccessory(1);

      expect(result).toEqual(mockAccessory);
      expect(mockPrismaService.streetLightAccessory.delete).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });

    it('should throw NotFoundException if accessory not found', async () => {
      mockPrismaService.streetLightAccessory.findUnique.mockResolvedValue(null);

      await expect(service.deleteStreetLightAccessory(999)).rejects.toThrow(
        new NotFoundException('Street light accessory with ID 999 not found'),
      );
      
      expect(mockPrismaService.streetLightAccessory.delete).not.toHaveBeenCalled();
    });
  });
});
