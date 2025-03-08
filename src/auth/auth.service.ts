import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from 'src/user/user.service';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private user: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(data: Partial<User>) {
    const userexist: User = await this.user.getUserByEmail(data.email);
    if (userexist) {
      if (await compare(data.password, userexist.password)) {
        console.log('userexist', userexist);
        const payload = { email: data.email, name: data.name };
        return {
          token: await this.jwtService.signAsync(payload),
          user: userexist,
        };
      } else {
        throw new NotFoundException('contraseña incorrecta');
      }
    }
    throw new NotFoundException('Usuario no encontrado');
  }
  async register(data: User): Promise<User> {
    const userexist = await this.user.getUserByEmail(data.email);
    if (!userexist) {
      data.rol = 'user';
      data.password = await hash(data.password, 10);
      const newuser = await this.user.createUser(data);
      return newuser;
    } else {
      throw new ConflictException('email ya existe');
    }
  }
}
