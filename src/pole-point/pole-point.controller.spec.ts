import { Test, TestingModule } from '@nestjs/testing';
import { PolePointController } from './pole-point.controller';

describe('PolePointController', () => {
  let controller: PolePointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PolePointController],
    }).compile();

    controller = module.get<PolePointController>(PolePointController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
