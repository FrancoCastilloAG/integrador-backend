import { Injectable } from '@nestjs/common';
import { CreateProfessionalInput } from './dto/create-professional.input';
import { UpdateProfessionalInput } from './dto/update-professional.input';

@Injectable()
export class ProfessionalService {
  create(createProfessionalInput: CreateProfessionalInput) {
    return 'This action adds a new professional';
  }

  findAll() {
    return `This action returns all professional`;
  }

  findOne(id: number) {
    return `This action returns a #${id} professional`;
  }

  update(id: number, updateProfessionalInput: UpdateProfessionalInput) {
    return `This action updates a #${id} professional`;
  }

  remove(id: number) {
    return `This action removes a #${id} professional`;
  }
}
