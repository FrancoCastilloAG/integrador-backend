import { Module } from '@nestjs/common';
import { ServiceReviewService } from './service-review.service';
import { ServiceReviewResolver } from './service-review.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ServiceReviewResolver, ServiceReviewService,PrismaService],
})
export class ServiceReviewModule {}
