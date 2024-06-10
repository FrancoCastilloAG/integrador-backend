import { Injectable } from '@nestjs/common';
import { Service } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class ServiceReviewService {
  constructor(private prisma: PrismaService){}

  async create(data: Service) {
    return this.prisma.service.create({data})
  }
}
