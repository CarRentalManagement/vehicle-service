import { Test, TestingModule } from '@nestjs/testing';
import { CarTypeController } from './carType.controller';
import { CarTypeService } from './carType.service';

describe('VehicleTypeController', () => {
  let controller: CarTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarTypeController],
      providers: [CarTypeService],
    }).compile();

    controller = module.get<CarTypeController>(CarTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
