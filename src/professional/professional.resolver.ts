import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { ProfessionalService } from './professional.service';
import { CreateProfessionalInput } from './dto/create-professional.input';
import { UpdateProfessionalInput } from './dto/update-professional.input';
import { User } from 'src/graphql';
import { UserService } from 'src/user/user.service';

@Resolver('Professional')
export class ProfessionalResolver {
  constructor(
    private readonly professionalService: ProfessionalService,
    private readonly userService: UserService,
  ) {}

  @Mutation('createProfessional')
  create(
    @Args('createProfessionalInput')
    createProfessionalInput: CreateProfessionalInput,
  ) {
    return this.professionalService.create(createProfessionalInput);
  }

  @Query('professionals')
  findAll() {
    return this.professionalService.findAll();
  }

  @Query('professional')
  findOne(@Args('id') id: number) {
    return this.professionalService.findOne(id);
  }

  @Mutation('updateProfessional')
  update(
    @Args('updateProfessionalInput')
    updateProfessionalInput: UpdateProfessionalInput,
    @Args('id') id: number,
  ) {
    return this.professionalService.update(id, updateProfessionalInput);
  }

  @Mutation('removeProfessional')
  remove(@Args('id') id: number) {
    return this.professionalService.remove(id);
  }

  @ResolveField('userOfProfessional')
  async getUser(@Parent() user: User) {
    return await this.userService.findOne(user.id);
  }
}
