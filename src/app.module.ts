import { ServicesModule } from './services/services.module';
import { ProfessionalModule } from './professional/professional.module';
import { AuthModule } from './auth/auth.module';
import { BookingModule } from './booking/booking.module';

import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    UserModule,
    ServicesModule,
    ProfessionalModule,
    AuthModule,
    BookingModule,
  ],
})
export class AppModule {}
