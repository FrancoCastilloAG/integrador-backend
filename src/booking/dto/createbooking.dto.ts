import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateBookingInput {
  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  serviceId: number;

  @Field(() => Int)
  professionalId: number;

  @Field(() => Boolean, { defaultValue: true })
  isActive?: boolean;
}
