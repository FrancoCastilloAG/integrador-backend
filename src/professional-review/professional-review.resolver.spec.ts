import { Test, TestingModule } from '@nestjs/testing';
import { ProfessionalReviewResolver } from './professional-review.resolver';
import { ProfessionalReviewService } from './professional-review.service';

describe('ProfessionalReviewResolver', () => {
  let resolver: ProfessionalReviewResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfessionalReviewResolver, ProfessionalReviewService],
    }).compile();

    resolver = module.get<ProfessionalReviewResolver>(ProfessionalReviewResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
