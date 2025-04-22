import { Test, TestingModule } from '@nestjs/testing';
import { StreetLightController } from './street-light.controller';

describe('StreetLightController', () => {
  let controller: StreetLightController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StreetLightController],
    }).compile();

    controller = module.get<StreetLightController>(StreetLightController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
