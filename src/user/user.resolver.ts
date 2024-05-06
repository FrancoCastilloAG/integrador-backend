import { ProfessionalService } from './../professional/professional.service';
import { Resolver, Query, Args, Mutation, ResolveField } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { CreateUserInput } from './dto/create-user.dto';
import { UpdateUserInput } from './dto/update-user.dto';

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly professionalService: ProfessionalService,
  ) {}

  @Query('user')
  async findOne(@Args('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Query('users')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Mutation('createUser')
  async create(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.userService.create(createUserInput);
  }

  @Mutation('updateUser')
  async update(
    @Args('id') id: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<User> {
    return this.userService.update(id, updateUserInput);
  }

  @ResolveField('professional')
  async getProfessional(@Args('id') id: number) {
    return this.professionalService.findOne(id);
  }
}
