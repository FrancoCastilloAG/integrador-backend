import { Module } from '@nestjs/common';
import { ProfessionalReviewService } from './professional-review.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [ProfessionalReviewService, PrismaService],
  exports: [ProfessionalReviewService],
})
export class ProfessionalReviewModule {}
