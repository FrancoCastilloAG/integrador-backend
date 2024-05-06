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
export class CreateProfessionalInput {
  name: string;
  lastName: string;
  phone: string;
  userId: number;
}
