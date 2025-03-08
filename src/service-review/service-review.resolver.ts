import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceReviewService } from './service-review.service';

@Resolver('ServiceReview')
export class ServiceReviewResolver {
  constructor(private readonly serviceReviewService: ServiceReviewService) {}

  @Mutation('createServiceReview')
  create(
    @Args('createServiceReviewInput')
    createServiceReviewInput: Prisma.ServiceReviewCreateInput,
  ) {
    return this.serviceReviewService.create(createServiceReviewInput);
  }
}
