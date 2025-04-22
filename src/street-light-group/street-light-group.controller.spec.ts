import { Test, TestingModule } from '@nestjs/testing';
import { StreetLightGroupController } from './street-light-group.controller';

describe('StreetLightGroupController', () => {
  let controller: StreetLightGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StreetLightGroupController],
    }).compile();

    controller = module.get<StreetLightGroupController>(StreetLightGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
