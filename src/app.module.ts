import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ServicesModule } from './services/services.module';
import { ProfessionalModule } from './professional/professional.module';

@Module({
  imports: [UserModule,GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    playground: true,
    typePaths: ['./**/*.graphql'],
    definitions: {
      path: join(process.cwd(), 'src/graphql.ts'),
    },
  }), ServicesModule, ProfessionalModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
