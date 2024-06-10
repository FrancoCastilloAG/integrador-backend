import { Injectable } from '@nestjs/common';
import { Professional } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProfessionalService {
  constructor(private readonly prisma: PrismaService) {}

  async createProfessional(data: Professional): Promise<Professional> {
    const createdProfessional = this.prisma.professional.create({ data })
    await this.prisma.user.update({
      where: { id: data.userId },
      data: { professionalId: (await createdProfessional).id}
    });
    return createdProfessional;
  }

  async getProfessionalById(id: number): Promise<Professional> {
    const professionalWithServices = await this.prisma.professional.findUnique({
      where: { id: id },
      include: { user: true, services: true },
    });
    return professionalWithServices;
  }
  async updateProfessional(
    id: number,
    data: Partial<Professional>,
  ): Promise<Professional> {
    return this.prisma.professional.update({ where: { id }, data });
  }

  async deleteProfessional(id: number): Promise<Professional> {
    return this.prisma.professional.delete({ where: { id } });
  }
}
