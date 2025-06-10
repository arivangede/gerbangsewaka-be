import { Test, TestingModule } from '@nestjs/testing';
import { UserAreaAccessController } from './user-area-access.controller';

describe('UserAreaAccessController', () => {
  let controller: UserAreaAccessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserAreaAccessController],
    }).compile();

    controller = module.get<UserAreaAccessController>(UserAreaAccessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
