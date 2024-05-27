import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServiceReviewService } from './service-review.service';

@Module({
  providers: [ServiceReviewService, PrismaService],
  exports: [ServiceReviewService],
})
export class ServiceReviewModule {}
