import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  signin() {
    return this.authService.signin();
  }

  @Post('signup')
  signup(@Body() dto: any) {
    console.log({
      dto: dto,
    });
    return this.authService.signup();
  }
}
