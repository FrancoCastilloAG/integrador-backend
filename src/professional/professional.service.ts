import { Injectable } from '@nestjs/common';
import { CreateProfessionalInput } from './dto/create-professional.input';
import { UpdateProfessionalInput } from './dto/update-professional.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProfessionalService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProfessionalInput: CreateProfessionalInput) {
    try {
      return await this.prisma.professional.create({
        data: createProfessionalInput,
      });
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      return await this.prisma.professional.findMany();
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.professional.findUnique({
        where: {
          id: id,
        },
      });
    } catch (error) {
      return error;
    }
  }

  async update(id: number, updateProfessionalInput: UpdateProfessionalInput) {
    try {
      const existantUser = await this.prisma.professional.findUnique({
        where: {
          id: id,
        },
      });

      if (!existantUser) {
        return `Professional with id ${id} not found`;
      }

      return await this.prisma.professional.update({
        where: {
          id: id,
        },
        data: updateProfessionalInput,
      });
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      const existantUser = await this.prisma.professional.findUnique({
        where: {
          id: id,
        },
      });

      if (!existantUser) {
        return `Professional with id ${id} not found`;
      }

      return await this.prisma.professional.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      return error;
    }
  }
}
