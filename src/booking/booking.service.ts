import { Injectable } from '@nestjs/common';
import { Booking } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BookingService {
  constructor(private readonly prisma: PrismaService) {}

  async createBooking(data: Booking): Promise<Booking> {
    //return this.prisma.booking.create({ data });
    const newBooking = await this.prisma.booking.create({data});
    console.log("nuevo booking",newBooking)
    return newBooking;
  }
}
