import { CreateUserInput } from 'src/user/dto/create-user.dto';
import { LoginDto } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';

import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async register(userDto: CreateUserInput) {
    try {
      const user = await this.usersService.findByEmail(userDto.email);

      if (!user) {
        return await this.usersService.create(userDto);
      }

      throw new BadRequestException('User already exists');
    } catch (error) {
      return {
        statusCode: 400,
        message: error.message,
        success: false,
      };
    }
  }

  async login({ email, password }: LoginDto) {
    try {
      const user = await this.usersService.findByEmail(email);

      if (!user) {
        throw new UnauthorizedException(
          'No existe una cuenta asociada a este correo',
        );
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (!isPasswordMatch) {
        throw new UnauthorizedException('Invalid credentials');
      }

      const accessToken = await this.jwtService.signAsync({
        email: user.email,
        sub: user.id,
      });

      const refreshToken = await this.jwtService.signAsync({
        email: user.email,
        sub: user.id,
      });

      const response = {
        statusCode: 200,
        message: 'Login successful',
        success: true,
        data: {
          accessToken: accessToken,
          refreshToken: refreshToken,
          user: user,
        },
      };

      return response;
    } catch (error) {
      return {
        statusCode: 401,
        message: error.message,
        success: false,
      };
    }
  }

  async refresh(email: string, refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken);
      const user = await this.usersService.findByEmail(email);

      if (!user) {
        throw new NotFoundException(`User ${payload.username} not found`);
      }

      return {
        access_token: this.jwtService.sign({
          username: user.userName,
          sub: user.id,
        }),
      };
    } catch (e) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}
