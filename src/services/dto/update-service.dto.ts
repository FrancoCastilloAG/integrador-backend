import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { CreateServiceInput } from './create-service.dto';

@InputType()
export class UpdateServiceInput extends PartialType(CreateServiceInput) {
  @Field()
  id: number;
}
