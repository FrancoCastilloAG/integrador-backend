import { Injectable } from '@nestjs/common';
import { Prisma, Service } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ServiceReviewService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ServiceReviewCreateInput) {
    return this.prisma.serviceReview.create({ data });
  }
}
