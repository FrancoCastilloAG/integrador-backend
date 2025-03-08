import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BookingService } from './booking.service';

@Resolver('Booking')
export class BookingResolver {
  constructor(private readonly bookingService: BookingService) {}

  @Mutation('createBooking')
  async createBooking(
    @Args('createBookingInput') createBookingInput: Prisma.BookingCreateInput,
  ) {
    console.log('data que llega al resolver', createBookingInput);
    return this.bookingService.createBooking(createBookingInput);
  }
}
