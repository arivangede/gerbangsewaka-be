import { Test, TestingModule } from '@nestjs/testing';
import { LampService } from './lamp.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';
import { CreateLampDto } from './dto/create-lamp.dto';
import { UpdateLampDto } from './dto/update-lamp.dto';

describe('LampService', () => {
  let service: LampService;
  let prisma: PrismaService;

  const mockPrismaService = {
    lamp: {
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

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LampService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<LampService>(LampService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllLamps', () => {
    it('should return all lamps', async () => {
      const mockLamps = [
        {
          id: 1,
          streetlighting_id: 1,
          brand: 'Philips',
          type: 'LED',
          power: '80W',
          streetLight: {
            id: 1,
            name: 'Street Light 1',
          },
        },
        {
          id: 2,
          streetlighting_id: 2,
          brand: 'Osram',
          type: 'Halogen',
          power: '100W',
          streetLight: {
            id: 2,
            name: 'Street Light 2',
          },
        },
      ];

      mockPrismaService.lamp.findMany.mockResolvedValue(mockLamps);

      const result = await service.getAllLamps();
      expect(result).toEqual(mockLamps);
      expect(prisma.lamp.findMany).toHaveBeenCalledWith({
        include: {
          streetLight: true,
        },
      });
    });

    it('should throw NotFoundException when no lamps found', async () => {
      mockPrismaService.lamp.findMany.mockResolvedValue([]);

      await expect(service.getAllLamps()).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('getLampById', () => {
    const lampId = 1;

    it('should return a lamp by id', async () => {
      const mockLamp = {
        id: lampId,
        streetlighting_id: 1,
        brand: 'Philips',
        type: 'LED',
        power: '80W',
        streetLight: {
          id: 1,
          name: 'Street Light 1',
        },
      };

      mockPrismaService.lamp.findUnique.mockResolvedValue(mockLamp);

      const result = await service.getLampById(lampId);
      expect(result).toEqual(mockLamp);
      expect(prisma.lamp.findUnique).toHaveBeenCalledWith({
        where: { id: lampId },
        include: {
          streetLight: true,
        },
      });
    });

    it('should throw NotFoundException when lamp not found', async () => {
      mockPrismaService.lamp.findUnique.mockResolvedValue(null);

      await expect(service.getLampById(lampId)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('createLamp', () => {
    const createDto: CreateLampDto = {
      streetlighting_id: 1,
      brand: 'GE Lighting',
      type: 'LED',
      power: '60W',
    };

    it('should create a new lamp', async () => {
      const mockStreetLight = {
        id: 1,
        name: 'Street Light 1',
      };

      const mockLamp = {
        id: 3,
        ...createDto,
        streetLight: mockStreetLight,
      };

      mockPrismaService.streetLight.findUnique.mockResolvedValue(mockStreetLight);
      mockPrismaService.lamp.create.mockResolvedValue(mockLamp);

      const result = await service.createLamp(createDto);
      expect(result).toEqual(mockLamp);
      expect(prisma.streetLight.findUnique).toHaveBeenCalledWith({
        where: { id: createDto.streetlighting_id },
      });
      expect(prisma.lamp.create).toHaveBeenCalledWith({
        data: createDto,
        include: {
          streetLight: true,
        },
      });
    });

    it('should throw NotFoundException when street light not found', async () => {
      mockPrismaService.streetLight.findUnique.mockResolvedValue(null);

      await expect(service.createLamp(createDto)).rejects.toThrow(
        NotFoundException,
      );
      expect(prisma.lamp.create).not.toHaveBeenCalled();
    });
  });

  describe('updateLamp', () => {
    const lampId = 1;
    const updateDto: UpdateLampDto = {
      brand: 'Osram',
      power: '120W',
      streetlighting_id: 2,
    };

    it('should update an existing lamp', async () => {
      const mockLamp = {
        id: lampId,
        streetlighting_id: 1,
        brand: 'Philips',
        type: 'LED',
        power: '80W',
      };

      const mockStreetLight = {
        id: 2,
        name: 'Street Light 2',
      };

      const updatedMockLamp = {
        ...mockLamp,
        ...updateDto,
        streetLight: mockStreetLight,
      };

      mockPrismaService.lamp.findUnique.mockResolvedValue(mockLamp);
      mockPrismaService.streetLight.findUnique.mockResolvedValue(mockStreetLight);
      mockPrismaService.lamp.update.mockResolvedValue(updatedMockLamp);

      const result = await service.updateLamp(lampId, updateDto);
      expect(result).toEqual(updatedMockLamp);
      expect(prisma.lamp.update).toHaveBeenCalledWith({
        where: { id: lampId },
        data: updateDto,
        include: {
          streetLight: true,
        },
      });
    });

    it('should throw NotFoundException when lamp not found', async () => {
      mockPrismaService.lamp.findUnique.mockResolvedValue(null);

      await expect(
        service.updateLamp(lampId, updateDto),
      ).rejects.toThrow(NotFoundException);
      expect(prisma.lamp.update).not.toHaveBeenCalled();
    });

    it('should throw NotFoundException when new street light not found', async () => {
      const mockLamp = {
        id: lampId,
        streetlighting_id: 1,
        brand: 'Philips',
        type: 'LED',
        power: '80W',
      };

      mockPrismaService.lamp.findUnique.mockResolvedValue(mockLamp);
      mockPrismaService.streetLight.findUnique.mockResolvedValue(null);

      await expect(
        service.updateLamp(lampId, updateDto),
      ).rejects.toThrow(NotFoundException);
      expect(prisma.lamp.update).not.toHaveBeenCalled();
    });
  });

  describe('deleteLamp', () => {
    const lampId = 1;

    it('should delete an existing lamp', async () => {
      const mockLamp = {
        id: lampId,
        streetlighting_id: 1,
        brand: 'Philips',
        type: 'LED',
        power: '80W',
      };

      mockPrismaService.lamp.findUnique.mockResolvedValue(mockLamp);
      mockPrismaService.lamp.delete.mockResolvedValue(mockLamp);

      const result = await service.deleteLamp(lampId);
      expect(result).toEqual(mockLamp);
      expect(prisma.lamp.delete).toHaveBeenCalledWith({
        where: { id: lampId },
      });
    });

    it('should throw NotFoundException when lamp not found', async () => {
      mockPrismaService.lamp.findUnique.mockResolvedValue(null);

      await expect(service.deleteLamp(lampId)).rejects.toThrow(
        NotFoundException,
      );
      expect(prisma.lamp.delete).not.toHaveBeenCalled();
    });
  });
});
