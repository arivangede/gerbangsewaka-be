import { Test, TestingModule } from '@nestjs/testing';
import { StreetLightGroupService } from './street-light-group.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';
import { CreateStreetLightGroupDto } from './dto/create-street-light-group.dto';
import { UpdateStreetLightGroupDto } from './dto/update-street-light-group.dto';

describe('StreetLightGroupService', () => {
  let service: StreetLightGroupService;
  let prisma: PrismaService;

  const mockPrismaService = {
    streetLightGroup: {
      findMany: jest.fn(),
      findFirst: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    area: {
      findUnique: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StreetLightGroupService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<StreetLightGroupService>(StreetLightGroupService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllStreetLightGroups', () => {
    it('should return all street light groups', async () => {
      const mockGroups = [
        {
          id: 1,
          name: 'Kelompok Lampu Jalan Denpasar Utara',
          area_id: 'e1f2a3b4-c5d6-4e7f-8g9h-0i1j2k3l4m5n',
          area: {
            id: 'e1f2a3b4-c5d6-4e7f-8g9h-0i1j2k3l4m5n',
            name: 'Denpasar',
          },
          streetLight: [],
        },
        {
          id: 2,
          name: 'Kelompok Lampu Jalan Gianyar Pusat',
          area_id: 'f2e3d4c5-b6a7-8g9h-0i1j-2k3l4m5n6o7p',
          area: {
            id: 'f2e3d4c5-b6a7-8g9h-0i1j-2k3l4m5n6o7p',
            name: 'Gianyar',
          },
          streetLight: [],
        },
      ];

      mockPrismaService.streetLightGroup.findMany.mockResolvedValue(mockGroups);

      const result = await service.getAllStreetLightGroups();
      expect(result).toEqual(mockGroups);
      expect(prisma.streetLightGroup.findMany).toHaveBeenCalledWith({
        include: {
          area: true,
          streetLight: true,
        },
      });
    });

    it('should throw NotFoundException when no groups found', async () => {
      mockPrismaService.streetLightGroup.findMany.mockResolvedValue([]);

      await expect(service.getAllStreetLightGroups()).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('getStreetLightGroupById', () => {
    const groupId = 1;

    it('should return a street light group by id', async () => {
      const mockGroup = {
        id: groupId,
        name: 'Kelompok Lampu Jalan Denpasar Utara',
        area_id: 'e1f2a3b4-c5d6-4e7f-8g9h-0i1j2k3l4m5n',
        area: {
          id: 'e1f2a3b4-c5d6-4e7f-8g9h-0i1j2k3l4m5n',
          name: 'Denpasar',
        },
        streetLight: [],
      };

      mockPrismaService.streetLightGroup.findFirst.mockResolvedValue(mockGroup);

      const result = await service.getStreetLightGroupById(groupId);
      expect(result).toEqual(mockGroup);
      expect(prisma.streetLightGroup.findFirst).toHaveBeenCalledWith({
        where: { id: groupId },
        include: {
          area: true,
          streetLight: true,
        },
      });
    });

    it('should throw NotFoundException when group not found', async () => {
      mockPrismaService.streetLightGroup.findFirst.mockResolvedValue(null);

      await expect(service.getStreetLightGroupById(groupId)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('createStreetLightGroup', () => {
    const createDto: CreateStreetLightGroupDto = {
      name: 'Kelompok Lampu Jalan Badung Selatan',
      area_id: 'e1f2a3b4-c5d6-4e7f-8g9h-0i1j2k3l4m5n',
    };

    it('should create a new street light group', async () => {
      const mockArea = {
        id: 'e1f2a3b4-c5d6-4e7f-8g9h-0i1j2k3l4m5n',
        name: 'Badung',
      };

      const mockGroup = {
        id: 1,
        ...createDto,
        area: mockArea,
        streetLight: [],
      };

      mockPrismaService.area.findUnique.mockResolvedValue(mockArea);
      mockPrismaService.streetLightGroup.create.mockResolvedValue(mockGroup);

      const result = await service.createStreetLightGroup(createDto);
      expect(result).toEqual(mockGroup);
      expect(prisma.area.findUnique).toHaveBeenCalledWith({
        where: { id: createDto.area_id },
      });
      expect(prisma.streetLightGroup.create).toHaveBeenCalledWith({
        data: createDto,
        include: {
          area: true,
          streetLight: true,
        },
      });
    });

    it('should throw NotFoundException when area not found', async () => {
      mockPrismaService.area.findUnique.mockResolvedValue(null);

      await expect(service.createStreetLightGroup(createDto)).rejects.toThrow(
        NotFoundException,
      );
      expect(prisma.streetLightGroup.create).not.toHaveBeenCalled();
    });
  });

  describe('updateStreetLightGroup', () => {
    const groupId = 1;
    const updateDto: UpdateStreetLightGroupDto = {
      name: 'Kelompok Lampu Jalan Denpasar Selatan Updated',
      area_id: 'f2e3d4c5-b6a7-8g9h-0i1j-2k3l4m5n6o7p',
    };

    it('should update an existing street light group', async () => {
      const mockArea = {
        id: 'f2e3d4c5-b6a7-8g9h-0i1j-2k3l4m5n6o7p',
        name: 'Denpasar',
      };

      const mockGroup = {
        id: groupId,
        name: 'Kelompok Lampu Jalan Denpasar Selatan',
        area_id: 'e1f2a3b4-c5d6-4e7f-8g9h-0i1j2k3l4m5n',
      };

      const updatedMockGroup = {
        ...mockGroup,
        ...updateDto,
        area: mockArea,
        streetLight: [],
      };

      mockPrismaService.streetLightGroup.findUnique.mockResolvedValue(mockGroup);
      mockPrismaService.area.findUnique.mockResolvedValue(mockArea);
      mockPrismaService.streetLightGroup.update.mockResolvedValue(updatedMockGroup);

      const result = await service.updateStreetLightGroup(groupId, updateDto);
      expect(result).toEqual(updatedMockGroup);
      expect(prisma.streetLightGroup.update).toHaveBeenCalledWith({
        where: { id: groupId },
        data: updateDto,
        include: {
          area: true,
          streetLight: true,
        },
      });
    });

    it('should throw NotFoundException when group not found', async () => {
      mockPrismaService.streetLightGroup.findUnique.mockResolvedValue(null);

      await expect(
        service.updateStreetLightGroup(groupId, updateDto),
      ).rejects.toThrow(NotFoundException);
      expect(prisma.streetLightGroup.update).not.toHaveBeenCalled();
    });

    it('should throw NotFoundException when new area not found', async () => {
      const mockGroup = {
        id: groupId,
        name: 'Kelompok Lampu Jalan Denpasar Selatan',
        area_id: 'e1f2a3b4-c5d6-4e7f-8g9h-0i1j2k3l4m5n',
      };

      mockPrismaService.streetLightGroup.findUnique.mockResolvedValue(mockGroup);
      mockPrismaService.area.findUnique.mockResolvedValue(null);

      await expect(
        service.updateStreetLightGroup(groupId, updateDto),
      ).rejects.toThrow(NotFoundException);
      expect(prisma.streetLightGroup.update).not.toHaveBeenCalled();
    });
  });

  describe('deleteStreetLightGroup', () => {
    const groupId = 1;

    it('should delete an existing street light group', async () => {
      const mockGroup = {
        id: groupId,
        name: 'Kelompok Lampu Jalan Denpasar Selatan',
        area_id: 'e1f2a3b4-c5d6-4e7f-8g9h-0i1j2k3l4m5n',
        area: {
          id: 'e1f2a3b4-c5d6-4e7f-8g9h-0i1j2k3l4m5n',
          name: 'Denpasar',
        },
        streetLight: [],
      };

      mockPrismaService.streetLightGroup.findUnique.mockResolvedValue(mockGroup);
      mockPrismaService.streetLightGroup.delete.mockResolvedValue(mockGroup);

      const result = await service.deleteStreetLightGroup(groupId);
      expect(result).toEqual(mockGroup);
      expect(prisma.streetLightGroup.delete).toHaveBeenCalledWith({
        where: { id: groupId },
        include: {
          area: true,
        },
      });
    });

    it('should throw NotFoundException when group not found', async () => {
      mockPrismaService.streetLightGroup.findUnique.mockResolvedValue(null);

      await expect(service.deleteStreetLightGroup(groupId)).rejects.toThrow(
        NotFoundException,
      );
      expect(prisma.streetLightGroup.delete).not.toHaveBeenCalled();
    });

    it('should throw NotFoundException when deleting group with street lights', async () => {
      const mockGroup = {
        id: groupId,
        name: 'Kelompok Lampu Jalan Denpasar Selatan',
        area_id: 'e1f2a3b4-c5d6-4e7f-8g9h-0i1j2k3l4m5n',
        area: {
          id: 'e1f2a3b4-c5d6-4e7f-8g9h-0i1j2k3l4m5n',
          name: 'Denpasar',
        },
        streetLight: [
          {
            id: 1,
            name: 'Lampu Jalan 1',
          },
        ],
      };

      mockPrismaService.streetLightGroup.findUnique.mockResolvedValue(mockGroup);

      await expect(service.deleteStreetLightGroup(groupId)).rejects.toThrow(
        NotFoundException,
      );
      expect(prisma.streetLightGroup.delete).not.toHaveBeenCalled();
    });
  });
});
