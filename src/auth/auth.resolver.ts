import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { User } from '@prisma/client';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation('register')
  create(@Args('registerInput') data: User) {
    return this.authService.register(data);
  }

  @Mutation('login')
  update(@Args('loginInput') data: Partial<User>) {
    return this.authService.login(data);
  }
}
