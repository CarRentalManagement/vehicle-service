import { Test, TestingModule } from '@nestjs/testing';
import { AutomakerController } from './automaker.controller';
import { AutomakerService } from './automaker.service';

describe('AutomakerController', () => {
  let controller: AutomakerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutomakerController],
      providers: [AutomakerService],
    }).compile();

    controller = module.get<AutomakerController>(AutomakerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
