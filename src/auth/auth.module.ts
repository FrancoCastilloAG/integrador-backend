import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';

@Module({
  imports:[    UserModule,JwtModule.register({
    secret: '1234', // colocar en varaible de entorno
    signOptions: { expiresIn: '1h' },
  }),],
  providers: [AuthResolver, AuthService],
})
export class AuthModule {}
