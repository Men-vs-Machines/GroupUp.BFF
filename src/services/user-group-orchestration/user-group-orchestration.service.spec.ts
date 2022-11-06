import { Test, TestingModule } from '@nestjs/testing';
import { UserGroupOrchestrationService } from './user-group-orchestration.service';

describe('UserGroupOrchestrationService', () => {
  let service: UserGroupOrchestrationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserGroupOrchestrationService],
    }).compile();

    service = module.get<UserGroupOrchestrationService>(UserGroupOrchestrationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
