import { Test, TestingModule } from '@nestjs/testing';
import { StreetLightController } from './street-light.controller';
import { StreetLightService } from './street-light.service';
import { CreateStreetLightDto } from './dto/create-street-light.dto';
import { UpdateStreetLightDto } from './dto/update-street-light.dto';
import { StreetLightStatus } from '@prisma/client';

describe('StreetLightController', () => {
  let controller: StreetLightController;
  let service: StreetLightService;

  const mockStreetLightService = {
    getAllStreetLights: jest.fn(),
    getStreetLightById: jest.fn(),
    createStreetLight: jest.fn(),
    updateStreetLight: jest.fn(),
    deleteStreetLight: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StreetLightController],
      providers: [
        {
          provide: StreetLightService,
          useValue: mockStreetLightService,
        },
      ],
    }).compile();

    controller = module.get<StreetLightController>(StreetLightController);
    service = module.get<StreetLightService>(StreetLightService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllStreetLights', () => {
    it('should return an array of street lights', async () => {
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
          status: 'Active',
          location: 'Main Street corner',
          roadFunction: {
            id: 1,
            name: 'Arterial',
          },
          streetLightGroup: {
            id: 1,
            name: 'Kelompok Lampu Jalan Denpasar Utara',
            area: {
              id: 'e1f2a3b4-c5d6-4e7f-8g9h-0i1j2k3l4m5n',
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
          status: 'Active',
          location: 'Secondary Street corner',
          roadFunction: {
            id: 2,
            name: 'Collector',
          },
          streetLightGroup: {
            id: 1,
            name: 'Kelompok Lampu Jalan Denpasar Utara',
            area: {
              id: 'e1f2a3b4-c5d6-4e7f-8g9h-0i1j2k3l4m5n',
              name: 'Denpasar',
            },
          },
          lamp: [],
          streetLightAccessory: [],
        },
      ];

      mockStreetLightService.getAllStreetLights.mockResolvedValue(mockStreetLights);

      const result = await controller.getAllStreetLights();
      expect(result).toEqual(mockStreetLights);
      expect(service.getAllStreetLights).toHaveBeenCalled();
    });
  });

  describe('getStreetLightById', () => {
    const streetLightId = 1;

    it('should return a single street light', async () => {
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
        status: 'Active',
        location: 'Main Street corner',
        roadFunction: {
          id: 1,
          name: 'Arterial',
        },
        streetLightGroup: {
          id: 1,
          name: 'Kelompok Lampu Jalan Denpasar Utara',
          area: {
            id: 'e1f2a3b4-c5d6-4e7f-8g9h-0i1j2k3l4m5n',
            name: 'Denpasar',
          },
        },
        lamp: [],
        streetLightAccessory: [],
      };

      mockStreetLightService.getStreetLightById.mockResolvedValue(mockStreetLight);

      const result = await controller.getStreetLightById(streetLightId);
      expect(result).toEqual(mockStreetLight);
      expect(service.getStreetLightById).toHaveBeenCalledWith(streetLightId);
    });
  });

  describe('createStreetLight', () => {
    it('should create a new street light', async () => {
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

      const mockStreetLight = {
        id: 3,
        ...createDto,
        roadFunction: {
          id: 1,
          name: 'Arterial',
        },
        streetLightGroup: {
          id: 1,
          name: 'Kelompok Lampu Jalan Denpasar Utara',
          area: {
            id: 'e1f2a3b4-c5d6-4e7f-8g9h-0i1j2k3l4m5n',
            name: 'Denpasar',
          },
        },
        lamp: [],
        streetLightAccessory: [],
      };

      mockStreetLightService.createStreetLight.mockResolvedValue(mockStreetLight);

      const result = await controller.createStreetLight(createDto);
      expect(result).toEqual(mockStreetLight);
      expect(service.createStreetLight).toHaveBeenCalledWith(createDto);
    });
  });

  describe('updateStreetLight', () => {
    const streetLightId = 1;

    it('should update an existing street light', async () => {
      const updateDto: UpdateStreetLightDto = {
        name: 'Updated Street Light',
        status: StreetLightStatus.UnderMaintenance,
        poleType: 'Composite',
      };

      const mockStreetLight = {
        id: streetLightId,
        name: 'Updated Street Light',
        latitude: -6.1754,
        longitude: 106.8272,
        roadfunction_id: 1,
        group_id: 1,
        poleType: 'Composite',
        poleHeight: '8m',
        poleMaterial: 'Steel',
        status: 'UnderMaintenance',
        location: 'Main Street corner',
        roadFunction: {
          id: 1,
          name: 'Arterial',
        },
        streetLightGroup: {
          id: 1,
          name: 'Kelompok Lampu Jalan Denpasar Utara',
          area: {
            id: 'e1f2a3b4-c5d6-4e7f-8g9h-0i1j2k3l4m5n',
            name: 'Denpasar',
          },
        },
        lamp: [],
        streetLightAccessory: [],
      };

      mockStreetLightService.updateStreetLight.mockResolvedValue(mockStreetLight);

      const result = await controller.updateStreetLight(streetLightId, updateDto);
      expect(result).toEqual(mockStreetLight);
      expect(service.updateStreetLight).toHaveBeenCalledWith(streetLightId, updateDto);
    });
  });

  describe('deleteStreetLight', () => {
    const streetLightId = 1;

    it('should delete a street light', async () => {
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
        status: 'Active',
        location: 'Main Street corner',
      };

      mockStreetLightService.deleteStreetLight.mockResolvedValue(mockStreetLight);

      const result = await controller.deleteStreetLight(streetLightId);
      expect(result).toEqual(mockStreetLight);
      expect(service.deleteStreetLight).toHaveBeenCalledWith(streetLightId);
    });
  });
});
