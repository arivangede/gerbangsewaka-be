import { Test, TestingModule } from '@nestjs/testing';
import { AreaController } from './area.controller';
import { AreaService } from './area.service';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';

describe('AreaController', () => {
  let controller: AreaController;
  let service: AreaService;

  const mockAreaService = {
    getAllAreas: jest.fn(),
    getAreaById: jest.fn(),
    createArea: jest.fn(),
    updateArea: jest.fn(),
    deleteArea: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AreaController],
      providers: [
        {
          provide: AreaService,
          useValue: mockAreaService,
        },
      ],
    }).compile();

    controller = module.get<AreaController>(AreaController);
    service = module.get<AreaService>(AreaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllAreas', () => {
    it('should return an array of areas', async () => {
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

      mockAreaService.getAllAreas.mockResolvedValue(mockAreas);

      const result = await controller.getAllAreas();
      expect(result).toEqual(mockAreas);
      expect(service.getAllAreas).toHaveBeenCalled();
    });
  });

  describe('getAreaById', () => {
    const mockUUID = 'e1f2a3b4-c5d6-4e7f-8g9h-0i1j2k3l4m5n';

    it('should return a single area', async () => {
      const mockArea = { 
        id: mockUUID, 
        name: 'Denpasar', 
        streetLightGroup: [] 
      };
      mockAreaService.getAreaById.mockResolvedValue(mockArea);

      const result = await controller.getAreaById(mockUUID);
      expect(result).toEqual(mockArea);
      expect(service.getAreaById).toHaveBeenCalledWith(mockUUID);
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

      mockAreaService.createArea.mockResolvedValue(mockArea);

      const result = await controller.createArea(createAreaDto);
      expect(result).toEqual(mockArea);
      expect(service.createArea).toHaveBeenCalledWith(createAreaDto);
    });
  });

  describe('updateArea', () => {
    const mockUUID = 'e1f2a3b4-c5d6-4e7f-8g9h-0i1j2k3l4m5n';

    it('should update an existing area', async () => {
      const updateAreaDto: UpdateAreaDto = { name: 'Denpasar Selatan' };
      const mockArea = { 
        id: mockUUID, 
        name: 'Denpasar Selatan', 
        streetLightGroup: [] 
      };

      mockAreaService.updateArea.mockResolvedValue(mockArea);

      const result = await controller.updateArea(mockUUID, updateAreaDto);
      expect(result).toEqual(mockArea);
      expect(service.updateArea).toHaveBeenCalledWith(mockUUID, updateAreaDto);
    });
  });

  describe('deleteArea', () => {
    const mockUUID = 'e1f2a3b4-c5d6-4e7f-8g9h-0i1j2k3l4m5n';

    it('should delete an area', async () => {
      const mockArea = { 
        id: mockUUID, 
        name: 'Denpasar', 
        streetLightGroup: [] 
      };
      mockAreaService.deleteArea.mockResolvedValue(mockArea);

      const result = await controller.deleteArea(mockUUID);
      expect(result).toEqual(mockArea);
      expect(service.deleteArea).toHaveBeenCalledWith(mockUUID);
    });
  });
});
