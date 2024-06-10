import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProfessionalReviewService } from './professional-review.service';
import { Professional, ProfessionalReview } from '@prisma/client';

@Resolver('ProfessionalReview')
export class ProfessionalReviewResolver {
  constructor(private readonly professionalReviewService: ProfessionalReviewService) {}

  @Mutation('createProfessionalReview')
  create(@Args('createProfessionalReviewInput') createProfessionalReviewInput: ProfessionalReview) {
    return this.professionalReviewService.create(createProfessionalReviewInput);
  }
}
