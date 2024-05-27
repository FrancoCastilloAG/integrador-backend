import { Service } from './../graphql';
import { Module } from '@nestjs/common';
import { BookingResolver } from './booking.resolver';
import { BookingService } from './booking.service';
import { ProfessionalReviewService } from './professional-review/professional-review.service';
import { ServiceReviewService } from './service-review/service-review.service';
import { ProfessionalReviewModule } from './professional-review/professional-review.module';
import { ServiceReviewModule } from './service-review/service-review.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ServicesModule } from 'src/services/services.module';

@Module({
  imports: [
    ProfessionalReviewModule,
    ServiceReviewModule,
    PrismaModule,
    ServicesModule,
  ],
  providers: [
    BookingResolver,
    BookingService,
    ProfessionalReviewService,
    ServiceReviewService,
  ],
  exports: [BookingService],
})
export class BookingModule {}
