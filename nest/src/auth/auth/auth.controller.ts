import { JwtGuard } from './jwt.guard';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  public login(@Body() body) {
    return this.authService.login(body.username, body.password);
  }

  @UseGuards(JwtGuard)
  @Get('test-auth')
  public test(@Req() req) {
    return {
      name: 'Luiz Carlos',
    };
  }
}
