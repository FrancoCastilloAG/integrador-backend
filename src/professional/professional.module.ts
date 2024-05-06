import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { ProfessionalResolver } from './professional.resolver';
import { ProfessionalService } from './professional.service';

@Module({
  imports: [],
  providers: [
    ProfessionalResolver,
    ProfessionalService,
    PrismaService,
    UserService,
  ],
  exports: [ProfessionalService],
})
export class ProfessionalModule {}
