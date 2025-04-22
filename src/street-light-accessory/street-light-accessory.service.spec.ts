import { Test, TestingModule } from '@nestjs/testing';
import { StreetLightAccessoryService } from './street-light-accessory.service';

describe('StreetLightAccessoryService', () => {
  let service: StreetLightAccessoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StreetLightAccessoryService],
    }).compile();

    service = module.get<StreetLightAccessoryService>(StreetLightAccessoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
