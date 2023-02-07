import { Test, TestingModule } from '@nestjs/testing';
import { MugsController } from './mugs.controller';

describe('MugsController', () => {
  let controller: MugsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MugsController],
    }).compile();

    controller = module.get<MugsController>(MugsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
