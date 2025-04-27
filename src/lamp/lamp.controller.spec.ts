import { Test, TestingModule } from '@nestjs/testing';
import { LampController } from './lamp.controller';
import { LampService } from './lamp.service';
import { CreateLampDto } from './dto/create-lamp.dto';
import { UpdateLampDto } from './dto/update-lamp.dto';

describe('LampController', () => {
  let controller: LampController;
  let service: LampService;

  const mockLampService = {
    getAllLamps: jest.fn(),
    getLampById: jest.fn(),
    createLamp: jest.fn(),
    updateLamp: jest.fn(),
    deleteLamp: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LampController],
      providers: [
        {
          provide: LampService,
          useValue: mockLampService,
        },
      ],
    }).compile();

    controller = module.get<LampController>(LampController);
    service = module.get<LampService>(LampService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllLamps', () => {
    it('should return an array of lamps', async () => {
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

      mockLampService.getAllLamps.mockResolvedValue(mockLamps);

      const result = await controller.getAllLamps();
      expect(result).toEqual(mockLamps);
      expect(service.getAllLamps).toHaveBeenCalled();
    });
  });

  describe('getLampById', () => {
    const lampId = 1;

    it('should return a single lamp', async () => {
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

      mockLampService.getLampById.mockResolvedValue(mockLamp);

      const result = await controller.getLampById(lampId);
      expect(result).toEqual(mockLamp);
      expect(service.getLampById).toHaveBeenCalledWith(lampId);
    });
  });

  describe('createLamp', () => {
    it('should create a new lamp', async () => {
      const createDto: CreateLampDto = {
        streetlighting_id: 1,
        brand: 'GE Lighting',
        type: 'LED',
        power: '60W',
      };

      const mockLamp = {
        id: 3,
        ...createDto,
        streetLight: {
          id: 1,
          name: 'Street Light 1',
        },
      };

      mockLampService.createLamp.mockResolvedValue(mockLamp);

      const result = await controller.createLamp(createDto);
      expect(result).toEqual(mockLamp);
      expect(service.createLamp).toHaveBeenCalledWith(createDto);
    });
  });

  describe('updateLamp', () => {
    const lampId = 1;

    it('should update an existing lamp', async () => {
      const updateDto: UpdateLampDto = {
        brand: 'Osram',
        power: '120W',
      };

      const mockLamp = {
        id: lampId,
        streetlighting_id: 1,
        brand: 'Osram',
        type: 'LED',
        power: '120W',
        streetLight: {
          id: 1,
          name: 'Street Light 1',
        },
      };

      mockLampService.updateLamp.mockResolvedValue(mockLamp);

      const result = await controller.updateLamp(lampId, updateDto);
      expect(result).toEqual(mockLamp);
      expect(service.updateLamp).toHaveBeenCalledWith(lampId, updateDto);
    });
  });

  describe('deleteLamp', () => {
    const lampId = 1;

    it('should delete a lamp', async () => {
      const mockLamp = {
        id: lampId,
        streetlighting_id: 1,
        brand: 'Philips',
        type: 'LED',
        power: '80W',
      };

      mockLampService.deleteLamp.mockResolvedValue(mockLamp);

      const result = await controller.deleteLamp(lampId);
      expect(result).toEqual(mockLamp);
      expect(service.deleteLamp).toHaveBeenCalledWith(lampId);
    });
  });
});
