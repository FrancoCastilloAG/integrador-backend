import { CreateProfessionalInput } from './create-professional.input';
import { PartialType } from '@nestjs/mapped-types';

/**
 * model Professional {
  id        Int       @id @default(autoincrement())
  name      String
  lastName  String
  phone     String
  userId    Int       @unique
  User      User?
  services  Service[]
  // bookings  Booking[]
}
 */

export class UpdateProfessionalInput extends PartialType(
  CreateProfessionalInput,
) {
  name?: string;
  lastName?: string;
  phone?: string;
}
