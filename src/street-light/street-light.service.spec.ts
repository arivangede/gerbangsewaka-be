import { Test, TestingModule } from '@nestjs/testing';
import { StreetLightService } from './street-light.service';

describe('StreetLightService', () => {
  let service: StreetLightService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StreetLightService],
    }).compile();

    service = module.get<StreetLightService>(StreetLightService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
