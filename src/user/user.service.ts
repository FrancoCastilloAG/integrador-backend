import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, PrismaClient, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(public prisma: PrismaService){}
  
  async create(createUserInput: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data: createUserInput });
  }
}
