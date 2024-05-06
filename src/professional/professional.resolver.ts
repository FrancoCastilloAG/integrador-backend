import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProfessionalService } from './professional.service';
import { CreateProfessionalInput } from './dto/create-professional.input';
import { UpdateProfessionalInput } from './dto/update-professional.input';

@Resolver('Professional')
export class ProfessionalResolver {
  constructor(private readonly professionalService: ProfessionalService) {}

  @Mutation('createProfessional')
  create(@Args('createProfessionalInput') createProfessionalInput: CreateProfessionalInput) {
    return this.professionalService.create(createProfessionalInput);
  }

  @Query('professional')
  findAll() {
    return this.professionalService.findAll();
  }

  @Query('professional')
  findOne(@Args('id') id: number) {
    return this.professionalService.findOne(id);
  }

  @Mutation('updateProfessional')
  update(@Args('updateProfessionalInput') updateProfessionalInput: UpdateProfessionalInput) {
    return this.professionalService.update(updateProfessionalInput.id, updateProfessionalInput);
  }

  @Mutation('removeProfessional')
  remove(@Args('id') id: number) {
    return this.professionalService.remove(id);
  }
}
