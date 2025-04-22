import { Test, TestingModule } from '@nestjs/testing';
import { RoadFunctionService } from './road-function.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('RoadFunctionService', () => {
  let service: RoadFunctionService;

  const mockPrismaService = {
    roadFunction: {
      findMany: jest.fn(),
      findFirst: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RoadFunctionService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<RoadFunctionService>(RoadFunctionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllRoadFunctions', () => {
    it('should return an array of road functions', async () => {
      const result = [
        {
          id: 1,
          name: 'Arterial',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      jest.spyOn(service, 'getAllRoadFunctions').mockResolvedValue(result);
      expect(await service.getAllRoadFunctions()).toBe(result);
      expect(service.getAllRoadFunctions).toHaveBeenCalled();
    });
  });

  describe('getRoadFunctionById', () => {
    it('should return a road function by id', async () => {
      const result = {
        id: 1,
        name: 'Arterial',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest.spyOn(service, 'getRoadFunctionById').mockResolvedValue(result);
      expect(await service.getRoadFunctionById(1)).toBe(result);
      expect(service.getRoadFunctionById).toHaveBeenCalledWith(1);
    });
  });

  describe('createRoadFunction', () => {
    it('should create a new road function', async () => {
      const createRoadFunctionDto = {
        name: 'Arterial',
      };
      const result = {
        id: 1,
        name: 'Arterial',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest.spyOn(service, 'createRoadFunction').mockResolvedValue(result);
      expect(await service.createRoadFunction(createRoadFunctionDto)).toBe(
        result,
      );
      expect(service.createRoadFunction).toHaveBeenCalledWith(
        createRoadFunctionDto,
      );
    });
  });

  describe('updateRoadFunction', () => {
    it('should update a road function', async () => {
      const updateRoadFunctionDto = {
        name: 'Arterial',
      };
      const result = {
        id: 1,
        name: 'Arterial',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest.spyOn(service, 'updateRoadFunction').mockResolvedValue(result);
      expect(await service.updateRoadFunction(1, updateRoadFunctionDto)).toBe(
        result,
      );
      expect(service.updateRoadFunction).toHaveBeenCalledWith(
        1,
        updateRoadFunctionDto,
      );
    });
  });

  describe('deleteRoadFunction', () => {
    it('should delete a road function by id', async () => {
      const result = {
        id: 1,
        name: 'Arterial',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest.spyOn(service, 'deleteRoadFunction').mockResolvedValue(result);
      expect(await service.deleteRoadFunction(1)).toBe(result);
      expect(service.deleteRoadFunction).toHaveBeenCalledWith(1);
    });
  });
});
