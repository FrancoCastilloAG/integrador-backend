import { Module } from '@nestjs/common';
import { ServiceService } from './services.service';
import { ServiceResolver } from './services.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ServiceResolver, ServiceService, PrismaService],
})
export class ServicesModule {}
