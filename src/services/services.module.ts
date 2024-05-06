import { Module } from '@nestjs/common';
import { ServiceService } from './services.service';
import { ServiceResolver } from './services.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ServiceResolver, ServiceService, PrismaService],
})
export class ServicesModule {}
