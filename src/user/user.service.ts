import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, PrismaClient, User } from '@prisma/client';
import { CreateUserInput } from './dto/create-user.dto';
import { UpdateUserInput } from './dto/update-user.dto'; // Asumiendo que tienes un DTO similar para actualizar

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService){}

  async create(createUserInput: CreateUserInput): Promise<User> {
    return this.prisma.user.create({ data: createUserInput });
  }

  async update(userId: string, updateUserInput: UpdateUserInput): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id: parseInt(userId) } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return this.prisma.user.update({ where: { id: parseInt(userId) }, data: updateUserInput });
  }

  async findOne(userId: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id: parseInt(userId) } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
  
}
