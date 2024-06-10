import { Injectable } from '@nestjs/common';
import { ProfessionalReview } from '@prisma/client';

import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProfessionalReviewService {
  constructor(private prisma: PrismaService) {}
  
  create(data: ProfessionalReview) {
    return this.prisma.professionalReview.create({data});
  }
}
