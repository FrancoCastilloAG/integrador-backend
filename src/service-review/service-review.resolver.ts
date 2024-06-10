import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ServiceReviewService } from './service-review.service';
import { Service } from '@prisma/client';

@Resolver('ServiceReview')
export class ServiceReviewResolver {
  constructor(private readonly serviceReviewService: ServiceReviewService) {}

  @Mutation('createServiceReview')
  create(@Args('createServiceReviewInput') createServiceReviewInput: Service) {
    return this.serviceReviewService.create(createServiceReviewInput);
  }
}
