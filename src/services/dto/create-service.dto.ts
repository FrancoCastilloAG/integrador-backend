import { InputType, Field ,ID} from '@nestjs/graphql';

@InputType()
export class CreateServiceInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => [String])
  photos: string[];

  @Field()
  contact: string;

  @Field()
  category: string;

  @Field()
  userId: number;
}
