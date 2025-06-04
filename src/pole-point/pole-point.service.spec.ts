import { Test, TestingModule } from '@nestjs/testing';
import { PolePointService } from './pole-point.service';

describe('PolePointService', () => {
  let service: PolePointService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PolePointService],
    }).compile();

    service = module.get<PolePointService>(PolePointService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
