import { Test, TestingModule } from '@nestjs/testing';
import { AutomakerService } from './automaker.service';

describe('AutomakerService', () => {
  let service: AutomakerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutomakerService],
    }).compile();

    service = module.get<AutomakerService>(AutomakerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
