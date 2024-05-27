import { PrismaService } from 'src/prisma/prisma.service';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { ProfessionalResolver } from './professional.resolver';
import { ProfessionalService } from './professional.service';

import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BookingModule } from 'src/booking/booking.module';
import { ServicesModule } from 'src/services/services.module';

@Module({
  imports: [UserModule, PrismaModule, BookingModule, ServicesModule],
  providers: [
    ProfessionalResolver,
    ProfessionalService,
    PrismaService,
    UserService,
  ],
  exports: [ProfessionalService],
})
export class ProfessionalModule {}
