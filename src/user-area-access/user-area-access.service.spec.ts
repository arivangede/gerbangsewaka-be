import { Test, TestingModule } from '@nestjs/testing';
import { UserAreaAccessService } from './user-area-access.service';

describe('UserAreaAccessService', () => {
  let service: UserAreaAccessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserAreaAccessService],
    }).compile();

    service = module.get<UserAreaAccessService>(UserAreaAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
