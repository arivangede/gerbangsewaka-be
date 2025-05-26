import { Test, TestingModule } from '@nestjs/testing';
import { StreetLightGroupController } from './street-light-group.controller';
import { StreetLightGroupService } from './street-light-group.service';
import { CreateStreetLightGroupDto } from './dto/create-street-light-group.dto';
import { UpdateStreetLightGroupDto } from './dto/update-street-light-group.dto';

describe('StreetLightGroupController', () => {
  let controller: StreetLightGroupController;
  let service: StreetLightGroupService;

  const mockStreetLightGroupService = {
    getAllStreetLightGroups: jest.fn(),
    getStreetLightGroupById: jest.fn(),
    createStreetLightGroup: jest.fn(),
    updateStreetLightGroup: jest.fn(),
    deleteStreetLightGroup: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StreetLightGroupController],
      providers: [
        {
          provide: StreetLightGroupService,
          useValue: mockStreetLightGroupService,
        },
      ],
    }).compile();

    controller = module.get<StreetLightGroupController>(StreetLightGroupController);
    service = module.get<StreetLightGroupService>(StreetLightGroupService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllStreetLightGroups', () => {
    it('should return an array of street light groups', async () => {
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

      mockStreetLightGroupService.getAllStreetLightGroups.mockResolvedValue(mockGroups);

      const result = await controller.getAllStreetLightGroups();
      expect(result).toEqual(mockGroups);
      expect(service.getAllStreetLightGroups).toHaveBeenCalled();
    });
  });

  describe('getStreetLightGroupById', () => {
    const groupId = 1;

    it('should return a single street light group', async () => {
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

      mockStreetLightGroupService.getStreetLightGroupById.mockResolvedValue(mockGroup);

      const result = await controller.getStreetLightGroupById(groupId);
      expect(result).toEqual(mockGroup);
      expect(service.getStreetLightGroupById).toHaveBeenCalledWith(groupId);
    });
  });

  describe('createStreetLightGroup', () => {
    it('should create a new street light group', async () => {
      const createDto: CreateStreetLightGroupDto = {
        name: 'Kelompok Lampu Jalan Badung Selatan',
        area_id: 'e1f2a3b4-c5d6-4e7f-8g9h-0i1j2k3l4m5n',
      };

      const mockGroup = {
        id: 1,
        ...createDto,
        area: {
          id: 'e1f2a3b4-c5d6-4e7f-8g9h-0i1j2k3l4m5n',
          name: 'Badung',
        },
        streetLight: [],
      };

      mockStreetLightGroupService.createStreetLightGroup.mockResolvedValue(mockGroup);

      const result = await controller.createStreetLightGroup(createDto);
      expect(result).toEqual(mockGroup);
      expect(service.createStreetLightGroup).toHaveBeenCalledWith(createDto);
    });
  });

  describe('updateStreetLightGroup', () => {
    const groupId = 1;

    it('should update an existing street light group', async () => {
      const updateDto: UpdateStreetLightGroupDto = {
        name: 'Kelompok Lampu Jalan Denpasar Selatan Updated',
        area_id: 'f2e3d4c5-b6a7-8g9h-0i1j-2k3l4m5n6o7p',
      };

      const mockGroup = {
        id: groupId,
        ...updateDto,
        area: {
          id: 'f2e3d4c5-b6a7-8g9h-0i1j-2k3l4m5n6o7p',
          name: 'Denpasar',
        },
        streetLight: [],
      };

      mockStreetLightGroupService.updateStreetLightGroup.mockResolvedValue(mockGroup);

      const result = await controller.updateStreetLightGroup(groupId, updateDto);
      expect(result).toEqual(mockGroup);
      expect(service.updateStreetLightGroup).toHaveBeenCalledWith(groupId, updateDto);
    });
  });

  describe('deleteStreetLightGroup', () => {
    const groupId = 1;

    it('should delete a street light group', async () => {
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

      mockStreetLightGroupService.deleteStreetLightGroup.mockResolvedValue(mockGroup);

      const result = await controller.deleteStreetLightGroup(groupId);
      expect(result).toEqual(mockGroup);
      expect(service.deleteStreetLightGroup).toHaveBeenCalledWith(groupId);
    });
  });
});
