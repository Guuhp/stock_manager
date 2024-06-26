import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { ForbiddenException, UnauthorizedException } from 'src/exceptions/expection';
import { UsersService } from 'src/modules/users/users.service';

@Injectable()
export class authenticateGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;

    try {
      const data = await this.authService.validateToken(
        (authorization ?? '').split(' ')[1],
      );
      request.tokenPayload = data;
      request.user = await this.userService.findOne(data.id);
      return true;
    } catch {
      new UnauthorizedException("check your permission")
    }
  }
}
