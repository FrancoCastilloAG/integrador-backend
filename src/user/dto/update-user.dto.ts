import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { CreateUserInput } from './create-user.dto';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field()
  id: number;
}
