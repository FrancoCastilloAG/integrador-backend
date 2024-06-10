import { Test, TestingModule } from '@nestjs/testing';
import { ServiceReviewResolver } from './service-review.resolver';
import { ServiceReviewService } from './service-review.service';

describe('ServiceReviewResolver', () => {
  let resolver: ServiceReviewResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceReviewResolver, ServiceReviewService],
    }).compile();

    resolver = module.get<ServiceReviewResolver>(ServiceReviewResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
