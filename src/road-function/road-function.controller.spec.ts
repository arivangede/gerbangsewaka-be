import { Test, TestingModule } from '@nestjs/testing';
import { RoadFunctionController } from './road-function.controller';
import { RoadFunctionService } from './road-function.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('RoadFunctionController', () => {
  let controller: RoadFunctionController;
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
      controllers: [RoadFunctionController],
      providers: [
        RoadFunctionService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    controller = module.get<RoadFunctionController>(RoadFunctionController);
    service = module.get<RoadFunctionService>(RoadFunctionService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
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
      expect(await controller.getAllRoadFunctions()).toBe(result);
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
      expect(await controller.getRoadFunctionById(1)).toBe(result);
      expect(service.getRoadFunctionById).toHaveBeenCalledWith(1);
    });
  });

  describe('createRoadFunction', () => {
    it('should create a new road function', async () => {
      const data = {
        name: 'Arterial',
      };
      const result = {
        id: 1,
        name: 'Arterial',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest.spyOn(service, 'createRoadFunction').mockResolvedValue(result);
      expect(await controller.createRoadFunction(data)).toBe(result);
      expect(service.createRoadFunction).toHaveBeenCalledWith(data);
    });
  });

  describe('updateRoadFunction', () => {
    it('should update a road function', async () => {
      const data = {
        name: 'Arterial',
      };
      const result = {
        id: 1,
        name: 'Arterial',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest.spyOn(service, 'updateRoadFunction').mockResolvedValue(result);
      expect(await controller.updateRoadFunction(1, data)).toBe(result);
      expect(service.updateRoadFunction).toHaveBeenCalledWith(1, data);
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
      expect(await controller.deleteRoadFunction(1)).toBe(result);
      expect(service.deleteRoadFunction).toHaveBeenCalledWith(1);
    });
  });
});
