import { Test, TestingModule } from '@nestjs/testing';
import { StreetLightAccessoryController } from './street-light-accessory.controller';
import { StreetLightAccessoryService } from './street-light-accessory.service';
import { CreateStreetLightAccessoryDto } from './dto/create-street-light-accessory.dto';
import { UpdateStreetLightAccessoryDto } from './dto/update-street-light-accessory.dto';
import { StreetLightStatus } from '@prisma/client';

describe('StreetLightAccessoryController', () => {
  let controller: StreetLightAccessoryController;
  let service: StreetLightAccessoryService;

  const mockStreetLightAccessoryService = {
    getAllStreetLightAccessories: jest.fn(),
    getStreetLightAccessoryById: jest.fn(),
    createStreetLightAccessory: jest.fn(),
    updateStreetLightAccessory: jest.fn(),
    deleteStreetLightAccessory: jest.fn(),
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

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StreetLightAccessoryController],
      providers: [
        {
          provide: StreetLightAccessoryService,
          useValue: mockStreetLightAccessoryService,
        },
      ],
    }).compile();

    controller = module.get<StreetLightAccessoryController>(StreetLightAccessoryController);
    service = module.get<StreetLightAccessoryService>(StreetLightAccessoryService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createStreetLightAccessory', () => {
    it('should create a street light accessory', async () => {
      const dto: CreateStreetLightAccessoryDto = {
        name: 'Test Accessory',
        streetlighting_id: 1,
      };
      const expectedResult = {
        id: 1,
        ...dto,
        createdAt: mockDate,
        updatedAt: mockDate,
        streetLight: mockStreetLight,
      };

      jest.spyOn(service, 'createStreetLightAccessory').mockResolvedValue(expectedResult);

      const result = await controller.createStreetLightAccessory(dto);
      expect(result).toBe(expectedResult);
      expect(service.createStreetLightAccessory).toHaveBeenCalledWith(dto);
    });
  });

  describe('getAllStreetLightAccessories', () => {
    it('should return an array of street light accessories', async () => {
      const expectedResult = [
        {
          id: 1,
          name: 'Accessory 1',
          streetlighting_id: 1,
          createdAt: mockDate,
          updatedAt: mockDate,
          streetLight: mockStreetLight,
        },
        {
          id: 2,
          name: 'Accessory 2',
          streetlighting_id: 2,
          createdAt: mockDate,
          updatedAt: mockDate,
          streetLight: { ...mockStreetLight, id: 2 },
        },
      ];

      jest.spyOn(service, 'getAllStreetLightAccessories').mockResolvedValue(expectedResult);

      const result = await controller.getAllStreetLightAccessories();
      expect(result).toBe(expectedResult);
      expect(service.getAllStreetLightAccessories).toHaveBeenCalled();
    });
  });

  describe('getStreetLightAccessoryById', () => {
    it('should return a single street light accessory', async () => {
      const expectedResult = {
        id: 1,
        name: 'Test Accessory',
        streetlighting_id: 1,
        createdAt: mockDate,
        updatedAt: mockDate,
        streetLight: mockStreetLight,
      };

      jest.spyOn(service, 'getStreetLightAccessoryById').mockResolvedValue(expectedResult);

      const result = await controller.getStreetLightAccessoryById(1);
      expect(result).toBe(expectedResult);
      expect(service.getStreetLightAccessoryById).toHaveBeenCalledWith(1);
    });
  });

  describe('updateStreetLightAccessory', () => {
    it('should update a street light accessory', async () => {
      const dto: UpdateStreetLightAccessoryDto = {
        name: 'Updated Accessory',
      };
      const expectedResult = {
        id: 1,
        name: 'Updated Accessory',
        streetlighting_id: 1,
        createdAt: mockDate,
        updatedAt: mockDate,
        streetLight: mockStreetLight,
      };

      jest.spyOn(service, 'updateStreetLightAccessory').mockResolvedValue(expectedResult);

      const result = await controller.updateStreetLightAccessory(1, dto);
      expect(result).toBe(expectedResult);
      expect(service.updateStreetLightAccessory).toHaveBeenCalledWith(1, dto);
    });
  });

  describe('deleteStreetLightAccessory', () => {
    it('should remove a street light accessory', async () => {
      const expectedResult = {
        id: 1,
        name: 'Deleted Accessory',
        streetlighting_id: 1,
        createdAt: mockDate,
        updatedAt: mockDate,
      };

      jest.spyOn(service, 'deleteStreetLightAccessory').mockResolvedValue(expectedResult);

      const result = await controller.deleteStreetLightAccessory(1);
      expect(result).toBe(expectedResult);
      expect(service.deleteStreetLightAccessory).toHaveBeenCalledWith(1);
    });
  });
});
