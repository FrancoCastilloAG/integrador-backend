import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { ProfessionalService } from './professional.service';
import { UserService } from 'src/user/user.service';
import { Professional } from '@prisma/client';

@Resolver('Professional')
export class ProfessionalResolver {
  constructor(
    private readonly professionalService: ProfessionalService,
  ) {}

  @Mutation('createProfessional')
  async createProfessional(
    @Args('createProfessional') data: Professional,
  ): Promise<Professional> {
    if (!data) {
      throw new Error('Data is missing');
    }
    console.log('resolver data user:', data);
    return this.professionalService.createProfessional(data);
  }

  @Query('getProfessionalById')
  async getProfessionalById(
    @Args('id') id: number,
  ): Promise<Professional | null> {
    return this.professionalService.getProfessionalById(id);
  }

  @Mutation('updateProfessional')
  async updatupdateProfessionalUser(
    @Args('id') id: number,
    @Args('data') data: Partial<Professional>,
  ): Promise<Professional> {
    return this.professionalService.updateProfessional(id, data);
  }

  @Mutation('deleteProfessional')
  async deleteProfessional(@Args('id') id: number): Promise<Professional> {
    return this.professionalService.deleteProfessional(id);
  }
}
