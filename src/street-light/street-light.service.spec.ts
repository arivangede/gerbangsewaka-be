import { Test, TestingModule } from '@nestjs/testing';
import { StreetLightService } from './street-light.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';
import { CreateStreetLightDto } from './dto/create-street-light.dto';
import { UpdateStreetLightDto } from './dto/update-street-light.dto';
import { StreetLightStatus } from '@prisma/client';

describe('StreetLightService', () => {
  let service: StreetLightService;
  let prisma: PrismaService;

  const mockPrismaService = {
    streetLight: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    roadFunction: {
      findUnique: jest.fn(),
    },
    streetLightGroup: {
      findUnique: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StreetLightService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<StreetLightService>(StreetLightService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllStreetLights', () => {
    it('should return all street lights', async () => {
      const mockStreetLights = [
        {
          id: 1,
          name: 'Street Light 1',
          latitude: -6.1754,
          longitude: 106.8272,
          roadfunction_id: 1,
          group_id: 1,
          poleType: 'Steel',
          poleHeight: '8m',
          poleMaterial: 'Steel',
          status: StreetLightStatus.Active,
          location: 'Main Street corner',
          roadFunction: {
            id: 1,
            name: 'Arterial',
          },
          streetLightGroup: {
            id: 1,
            name: 'Group 1',
            area: {
              id: 'area-id-1',
              name: 'Denpasar',
            },
          },
          lamp: [],
          streetLightAccessory: [],
        },
        {
          id: 2,
          name: 'Street Light 2',
          latitude: -6.1755,
          longitude: 106.8273,
          roadfunction_id: 2,
          group_id: 1,
          poleType: 'Aluminum',
          poleHeight: '10m',
          poleMaterial: 'Aluminum',
          status: StreetLightStatus.Active,
          location: 'Secondary Street corner',
          roadFunction: {
            id: 2,
            name: 'Collector',
          },
          streetLightGroup: {
            id: 1,
            name: 'Group 1',
            area: {
              id: 'area-id-1',
              name: 'Denpasar',
            },
          },
          lamp: [],
          streetLightAccessory: [],
        },
      ];

      mockPrismaService.streetLight.findMany.mockResolvedValue(mockStreetLights);

      const result = await service.getAllStreetLights();
      expect(result).toEqual(mockStreetLights);
      expect(prisma.streetLight.findMany).toHaveBeenCalledWith({
        include: {
          roadFunction: true,
          streetLightGroup: {
            include: {
              area: true,
            },
          },
          lamp: true,
          streetLightAccessory: true,
        },
      });
    });

    it('should throw NotFoundException when no street lights found', async () => {
      mockPrismaService.streetLight.findMany.mockResolvedValue([]);

      await expect(service.getAllStreetLights()).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('getStreetLightById', () => {
    const streetLightId = 1;

    it('should return a street light by id', async () => {
      const mockStreetLight = {
        id: streetLightId,
        name: 'Street Light 1',
        latitude: -6.1754,
        longitude: 106.8272,
        roadfunction_id: 1,
        group_id: 1,
        poleType: 'Steel',
        poleHeight: '8m',
        poleMaterial: 'Steel',
        status: StreetLightStatus.Active,
        location: 'Main Street corner',
        roadFunction: {
          id: 1,
          name: 'Arterial',
        },
        streetLightGroup: {
          id: 1,
          name: 'Group 1',
          area: {
            id: 'area-id-1',
            name: 'Denpasar',
          },
        },
        lamp: [],
        streetLightAccessory: [],
      };

      mockPrismaService.streetLight.findUnique.mockResolvedValue(mockStreetLight);

      const result = await service.getStreetLightById(streetLightId);
      expect(result).toEqual(mockStreetLight);
      expect(prisma.streetLight.findUnique).toHaveBeenCalledWith({
        where: { id: streetLightId },
        include: {
          roadFunction: true,
          streetLightGroup: {
            include: {
              area: true,
            },
          },
          lamp: true,
          streetLightAccessory: true,
        },
      });
    });

    it('should throw NotFoundException when street light not found', async () => {
      mockPrismaService.streetLight.findUnique.mockResolvedValue(null);

      await expect(service.getStreetLightById(streetLightId)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('createStreetLight', () => {
    const createDto: CreateStreetLightDto = {
      name: 'New Street Light',
      latitude: -6.1756,
      longitude: 106.8274,
      roadfunction_id: 1,
      group_id: 1,
      poleType: 'Steel',
      poleHeight: '8m',
      poleMaterial: 'Steel',
      status: StreetLightStatus.Active,
      location: 'New Street corner',
    };

    it('should create a new street light', async () => {
      const mockRoadFunction = {
        id: 1,
        name: 'Arterial',
      };

      const mockGroup = {
        id: 1,
        name: 'Group 1',
        area_id: 'area-id-1',
      };

      const mockStreetLight = {
        id: 3,
        ...createDto,
        roadFunction: mockRoadFunction,
        streetLightGroup: {
          ...mockGroup,
          area: {
            id: 'area-id-1',
            name: 'Denpasar',
          },
        },
        lamp: [],
        streetLightAccessory: [],
      };

      mockPrismaService.roadFunction.findUnique.mockResolvedValue(mockRoadFunction);
      mockPrismaService.streetLightGroup.findUnique.mockResolvedValue(mockGroup);
      mockPrismaService.streetLight.create.mockResolvedValue(mockStreetLight);

      const result = await service.createStreetLight(createDto);
      expect(result).toEqual(mockStreetLight);
      expect(prisma.roadFunction.findUnique).toHaveBeenCalledWith({
        where: { id: createDto.roadfunction_id },
      });
      expect(prisma.streetLightGroup.findUnique).toHaveBeenCalledWith({
        where: { id: createDto.group_id },
      });
      expect(prisma.streetLight.create).toHaveBeenCalledWith({
        data: createDto,
        include: {
          roadFunction: true,
          streetLightGroup: {
            include: {
              area: true,
            },
          },
          lamp: true,
          streetLightAccessory: true,
        },
      });
    });

    it('should throw NotFoundException when road function not found', async () => {
      mockPrismaService.roadFunction.findUnique.mockResolvedValue(null);

      await expect(service.createStreetLight(createDto)).rejects.toThrow(
        NotFoundException,
      );
      expect(prisma.streetLight.create).not.toHaveBeenCalled();
    });

    it('should throw NotFoundException when street light group not found', async () => {
      const mockRoadFunction = {
        id: 1,
        name: 'Arterial',
      };

      mockPrismaService.roadFunction.findUnique.mockResolvedValue(mockRoadFunction);
      mockPrismaService.streetLightGroup.findUnique.mockResolvedValue(null);

      await expect(service.createStreetLight(createDto)).rejects.toThrow(
        NotFoundException,
      );
      expect(prisma.streetLight.create).not.toHaveBeenCalled();
    });
  });

  describe('updateStreetLight', () => {
    const streetLightId = 1;
    const updateDto: UpdateStreetLightDto = {
      name: 'Updated Street Light',
      status: StreetLightStatus.UnderMaintenance,
      roadfunction_id: 2,
      group_id: 2,
    };

    it('should update an existing street light', async () => {
      const mockRoadFunction = {
        id: 2,
        name: 'Collector',
      };

      const mockGroup = {
        id: 2,
        name: 'Group 2',
        area_id: 'area-id-2',
      };

      const mockStreetLight = {
        id: streetLightId,
        name: 'Street Light 1',
        latitude: -6.1754,
        longitude: 106.8272,
        roadfunction_id: 1,
        group_id: 1,
        poleType: 'Steel',
        poleHeight: '8m',
        poleMaterial: 'Steel',
        status: StreetLightStatus.Active,
        location: 'Main Street corner',
      };

      const updatedMockStreetLight = {
        ...mockStreetLight,
        ...updateDto,
        roadFunction: mockRoadFunction,
        streetLightGroup: {
          ...mockGroup,
          area: {
            id: 'area-id-2',
            name: 'Badung',
          },
        },
        lamp: [],
        streetLightAccessory: [],
      };

      mockPrismaService.streetLight.findUnique.mockResolvedValue(mockStreetLight);
      mockPrismaService.roadFunction.findUnique.mockResolvedValue(mockRoadFunction);
      mockPrismaService.streetLightGroup.findUnique.mockResolvedValue(mockGroup);
      mockPrismaService.streetLight.update.mockResolvedValue(updatedMockStreetLight);

      const result = await service.updateStreetLight(streetLightId, updateDto);
      expect(result).toEqual(updatedMockStreetLight);
      expect(prisma.streetLight.update).toHaveBeenCalledWith({
        where: { id: streetLightId },
        data: updateDto,
        include: {
          roadFunction: true,
          streetLightGroup: {
            include: {
              area: true,
            },
          },
          lamp: true,
          streetLightAccessory: true,
        },
      });
    });

    it('should throw NotFoundException when street light not found', async () => {
      mockPrismaService.streetLight.findUnique.mockResolvedValue(null);

      await expect(
        service.updateStreetLight(streetLightId, updateDto),
      ).rejects.toThrow(NotFoundException);
      expect(prisma.streetLight.update).not.toHaveBeenCalled();
    });

    it('should throw NotFoundException when new road function not found', async () => {
      const mockStreetLight = {
        id: streetLightId,
        name: 'Street Light 1',
        latitude: -6.1754,
        longitude: 106.8272,
        roadfunction_id: 1,
        group_id: 1,
        poleType: 'Steel',
        poleHeight: '8m',
        poleMaterial: 'Steel',
        status: StreetLightStatus.Active,
        location: 'Main Street corner',
      };

      mockPrismaService.streetLight.findUnique.mockResolvedValue(mockStreetLight);
      mockPrismaService.roadFunction.findUnique.mockResolvedValue(null);

      await expect(
        service.updateStreetLight(streetLightId, updateDto),
      ).rejects.toThrow(NotFoundException);
      expect(prisma.streetLight.update).not.toHaveBeenCalled();
    });

    it('should throw NotFoundException when new street light group not found', async () => {
      const mockStreetLight = {
        id: streetLightId,
        name: 'Street Light 1',
        latitude: -6.1754,
        longitude: 106.8272,
        roadfunction_id: 1,
        group_id: 1,
        poleType: 'Steel',
        poleHeight: '8m',
        poleMaterial: 'Steel',
        status: StreetLightStatus.Active,
        location: 'Main Street corner',
      };

      const mockRoadFunction = {
        id: 2,
        name: 'Collector',
      };

      mockPrismaService.streetLight.findUnique.mockResolvedValue(mockStreetLight);
      mockPrismaService.roadFunction.findUnique.mockResolvedValue(mockRoadFunction);
      mockPrismaService.streetLightGroup.findUnique.mockResolvedValue(null);

      await expect(
        service.updateStreetLight(streetLightId, updateDto),
      ).rejects.toThrow(NotFoundException);
      expect(prisma.streetLight.update).not.toHaveBeenCalled();
    });
  });

  describe('deleteStreetLight', () => {
    const streetLightId = 1;

    it('should delete an existing street light without dependencies', async () => {
      const mockStreetLight = {
        id: streetLightId,
        name: 'Street Light 1',
        latitude: -6.1754,
        longitude: 106.8272,
        roadfunction_id: 1,
        group_id: 1,
        poleType: 'Steel',
        poleHeight: '8m',
        poleMaterial: 'Steel',
        status: StreetLightStatus.Active,
        location: 'Main Street corner',
        lamp: [],
        streetLightAccessory: [],
      };

      mockPrismaService.streetLight.findUnique.mockResolvedValue(mockStreetLight);
      mockPrismaService.streetLight.delete.mockResolvedValue(mockStreetLight);

      const result = await service.deleteStreetLight(streetLightId);
      expect(result).toEqual(mockStreetLight);
      expect(prisma.streetLight.delete).toHaveBeenCalledWith({
        where: { id: streetLightId },
      });
    });

    it('should throw NotFoundException when street light not found', async () => {
      mockPrismaService.streetLight.findUnique.mockResolvedValue(null);

      await expect(service.deleteStreetLight(streetLightId)).rejects.toThrow(
        NotFoundException,
      );
      expect(prisma.streetLight.delete).not.toHaveBeenCalled();
    });

    it('should throw NotFoundException when street light has lamps', async () => {
      const mockStreetLight = {
        id: streetLightId,
        name: 'Street Light 1',
        latitude: -6.1754,
        longitude: 106.8272,
        roadfunction_id: 1,
        group_id: 1,
        poleType: 'Steel',
        poleHeight: '8m',
        poleMaterial: 'Steel',
        status: StreetLightStatus.Active,
        location: 'Main Street corner',
        lamp: [{ id: 1, name: 'Lamp 1' }],
        streetLightAccessory: [],
      };

      mockPrismaService.streetLight.findUnique.mockResolvedValue(mockStreetLight);

      await expect(service.deleteStreetLight(streetLightId)).rejects.toThrow(
        NotFoundException,
      );
      expect(prisma.streetLight.delete).not.toHaveBeenCalled();
    });

    it('should throw NotFoundException when street light has accessories', async () => {
      const mockStreetLight = {
        id: streetLightId,
        name: 'Street Light 1',
        latitude: -6.1754,
        longitude: 106.8272,
        roadfunction_id: 1,
        group_id: 1,
        poleType: 'Steel',
        poleHeight: '8m',
        poleMaterial: 'Steel',
        status: StreetLightStatus.Active,
        location: 'Main Street corner',
        lamp: [],
        streetLightAccessory: [{ id: 1, name: 'Accessory 1' }],
      };

      mockPrismaService.streetLight.findUnique.mockResolvedValue(mockStreetLight);

      await expect(service.deleteStreetLight(streetLightId)).rejects.toThrow(
        NotFoundException,
      );
      expect(prisma.streetLight.delete).not.toHaveBeenCalled();
    });
  });
});
