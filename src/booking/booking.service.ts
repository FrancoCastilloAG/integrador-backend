import { Injectable } from '@nestjs/common';
import { Booking } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BookingService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Booking) {
    return this.prisma.booking.create({data});
  }
}
