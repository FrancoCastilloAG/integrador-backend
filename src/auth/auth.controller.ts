import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserInput } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  async register(@Body() userDto: CreateUserInput) {
    return await this.authService.register(userDto);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('update-jwt')
  async updateJWT(@Body() message: { email: string; token: string }) {
    try {
      const updateUser = await this.authService.refresh(
        message.email,
        message.token,
      );
      console.log('user updated');
      return {
        success: true,
        message: 'JWT updated succesfully',
        data: updateUser,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to update JWT',
        error: (error as Record<string, string>)?.message,
      };
    }
  }
}
