import { Test, TestingModule } from '@nestjs/testing';
import { StreetLightGroupService } from './street-light-group.service';

describe('StreetLightGroupService', () => {
  let service: StreetLightGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StreetLightGroupService],
    }).compile();

    service = module.get<StreetLightGroupService>(StreetLightGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
