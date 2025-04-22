import { Test, TestingModule } from '@nestjs/testing';
import { StreetLightAccessoryController } from './street-light-accessory.controller';

describe('StreetLightAccessoryController', () => {
  let controller: StreetLightAccessoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StreetLightAccessoryController],
    }).compile();

    controller = module.get<StreetLightAccessoryController>(StreetLightAccessoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
