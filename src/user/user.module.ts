import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProfessionalService } from './../professional/professional.service';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BookingModule } from 'src/booking/booking.module';

@Module({
  imports: [PrismaModule, BookingModule],
  providers: [UserResolver, UserService, PrismaService, ProfessionalService],
  exports: [UserService],
})
export class UserModule {}
