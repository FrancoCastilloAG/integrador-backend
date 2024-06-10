import { Module } from '@nestjs/common';
import { ProfessionalReviewService } from './professional-review.service';
import { ProfessionalReviewResolver } from './professional-review.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ProfessionalReviewResolver, ProfessionalReviewService,PrismaService],
})
export class ProfessionalReviewModule {}
