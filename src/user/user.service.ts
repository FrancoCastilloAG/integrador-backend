import { User } from '@prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: User): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async getUserById(id: number): Promise<User> {
    const userWithProfessional = await this.prisma.user.findUnique({
      where: { id: id },
      include: { professional: true },
    });
    return userWithProfessional;
  }
  async getUserByEmail(email: string): Promise<User> {
    const userWithProfessional = await this.prisma.user.findUnique({
      where: { email: email },
      include: { professional: true },
    });
    return userWithProfessional;
  }

  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async updateUser(id: number, data: Partial<User>): Promise<User> {
    return this.prisma.user.update({ where: { id }, data });
  }

  async deleteUser(id: number): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }
}
