import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; // Asegúrate de importar tu servicio de Prisma
import { CreateServiceInput } from './dto/create-service.dto';
import { UpdateServiceInput } from './dto/update-service.dto';

@Injectable()
export class ServiceService {
  constructor(private readonly prisma: PrismaService) {}

  async createService(createServiceInput: CreateServiceInput) {
    return this.prisma.service.create({ data: createServiceInput });
  }

  async findAllServices() {
    return this.prisma.service.findMany();
  }

  async findServiceById(id: number) {
    const service = await this.prisma.service.findUnique({ where: { id } });
    if (!service) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
    return service;
  }

  async updateService(id: number, data: UpdateServiceInput) {
    const service = await this.findServiceById(id);
    return this.prisma.service.update({ where: { id }, data });
  }

  async deleteService(id: number) {
    const service = await this.findServiceById(id);
    return this.prisma.service.delete({ where: { id } });
  }
}
