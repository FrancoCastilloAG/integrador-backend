import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BookingService } from './booking.service';
import { Booking } from '@prisma/client';
import { CreateBookingInput } from './dto/createbooking.dto';

@Resolver('Booking')
export class BookingResolver {
  constructor(private readonly bookingService: BookingService) {}

  @Mutation('createBooking')
  async createBooking(@Args('createBookingInput') createBookingInput: Booking) {
    console.log("data que llega al resolver", createBookingInput);
    return this.bookingService.create(createBookingInput);
  }
}
