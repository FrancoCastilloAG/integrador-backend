import { Module } from '@nestjs/common';
import { ProfessionalService } from './professional.service';
import { ProfessionalResolver } from './professional.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ProfessionalResolver, ProfessionalService, PrismaService],
})
export class ProfessionalModule {}
