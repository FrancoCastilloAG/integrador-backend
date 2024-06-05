import { Injectable, NotFoundException } from '@nestjs/common';
import { Service } from '@prisma/client';
import { PrismaService } from 'src/prisma.service'; // Asegúrate de importar tu servicio de Prisma

@Injectable()
export class ServiceService {
  constructor(private readonly prisma: PrismaService) {}

  async createService(data: Service): Promise<Service> {
    return this.prisma.service.create({ data });
  }

  async getAllServices(): Promise<Service[]> {
    return this.prisma.service.findMany();
  }

  async getServicesByProfessionalId(id: number): Promise<Service[]> {
    const services = await this.prisma.service.findMany({
      where: {
        professionalId: id,
      },
    });
    return services;
  }
  async deleteService(id: number): Promise<Service> {
    return this.prisma.service.delete({ where: { id } });
  }
  async updateService(id: number, data: Partial<Service>): Promise<Service> {
    return this.prisma.service.update({ where: { id }, data });
  }
}
