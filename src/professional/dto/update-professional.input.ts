import { CreateProfessionalInput } from './create-professional.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateProfessionalInput extends PartialType(CreateProfessionalInput) {
  id: number;
}
