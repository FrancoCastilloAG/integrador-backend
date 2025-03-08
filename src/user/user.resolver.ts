import { ProfessionalService } from './../professional/professional.service';
import {
  Resolver,
  Query,
  Args,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { Professional } from 'src/graphql';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation('createUser')
  async createUser(@Args('createUserInput') data: User): Promise<User> {
    if (!data) {
      throw new Error('Data is missing');
    }
    console.log('resolver data user:', data);
    return this.userService.createUser(data);
  }

  @Query('getUserByEmail')
  async getUserByEmail(@Args('email') email: string): Promise<User | null> {
    return this.userService.getUserByEmail(email);
  }

  @Query('getUserById')
  async getUserById(@Args('id') id: number): Promise<User | null> {
    return this.userService.getUserById(id);
  }

  @Query('getUsers')
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Mutation('updateUser')
  async updateUser(
    @Args('id') id: number,
    @Args('data') data: Partial<User>,
  ): Promise<User> {
    return this.userService.updateUser(id, data);
  }

  @Mutation('deleteUser')
  async deleteUser(@Args('id') id: number): Promise<User> {
    return this.userService.deleteUser(id);
  }
}
