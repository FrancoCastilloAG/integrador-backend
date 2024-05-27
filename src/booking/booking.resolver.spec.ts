import { Test, TestingModule } from '@nestjs/testing';
import { BookingService } from './booking.service';
import { BookingResolver } from './booking.resolver';

describe('BookingResolver', () => {
  let resolver: BookingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookingResolver, BookingService],
    }).compile();

    resolver = module.get<BookingResolver>(BookingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
