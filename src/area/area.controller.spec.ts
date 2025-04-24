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
        { id: '1', name: 'Area 1', streetLightGroup: [] },
        { id: '2', name: 'Area 2', streetLightGroup: [] },
      ];

      mockAreaService.getAllAreas.mockResolvedValue(mockAreas);

      const result = await controller.getAllAreas();
      expect(result).toEqual(mockAreas);
      expect(service.getAllAreas).toHaveBeenCalled();
    });
  });

  describe('getAreaById', () => {
    it('should return a single area', async () => {
      const mockArea = { id: '1', name: 'Area 1', streetLightGroup: [] };
      mockAreaService.getAreaById.mockResolvedValue(mockArea);

      const result = await controller.getAreaById('1');
      expect(result).toEqual(mockArea);
      expect(service.getAreaById).toHaveBeenCalledWith('1');
    });
  });

  describe('createArea', () => {
    it('should create a new area', async () => {
      const createAreaDto: CreateAreaDto = { name: 'New Area' };
      const mockArea = { id: '1', ...createAreaDto, streetLightGroup: [] };

      mockAreaService.createArea.mockResolvedValue(mockArea);

      const result = await controller.createArea(createAreaDto);
      expect(result).toEqual(mockArea);
      expect(service.createArea).toHaveBeenCalledWith(createAreaDto);
    });
  });

  describe('updateArea', () => {
    it('should update an existing area', async () => {
      const updateAreaDto: UpdateAreaDto = { name: 'Updated Area' };
      const mockArea = { id: '1', name: 'Updated Area', streetLightGroup: [] };

      mockAreaService.updateArea.mockResolvedValue(mockArea);

      const result = await controller.updateArea('1', updateAreaDto);
      expect(result).toEqual(mockArea);
      expect(service.updateArea).toHaveBeenCalledWith('1', updateAreaDto);
    });
  });

  describe('deleteArea', () => {
    it('should delete an area', async () => {
      const mockArea = { id: '1', name: 'Area', streetLightGroup: [] };
      mockAreaService.deleteArea.mockResolvedValue(mockArea);

      const result = await controller.deleteArea('1');
      expect(result).toEqual(mockArea);
      expect(service.deleteArea).toHaveBeenCalledWith('1');
    });
  });
});
