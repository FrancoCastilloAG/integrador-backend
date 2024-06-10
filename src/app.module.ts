import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ServicesModule } from './services/services.module';
import { ProfessionalModule } from './professional/professional.module';
import { AuthModule } from './auth/auth.module';
import { BookingModule } from './booking/booking.module';
import { ProfessionalReviewModule } from './professional-review/professional-review.module';
import { ServiceReviewModule } from './service-review/service-review.module';



@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    ServicesModule,
    ProfessionalModule,
    AuthModule,
    BookingModule,
    ProfessionalReviewModule,
    ServiceReviewModule,
  ],
})
export class AppModule {}
