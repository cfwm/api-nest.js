import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/shared/user.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from '../utils/utils';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(name: string, email: string): Promise<any> {
    const user = await this.usersService.findOne(name);
    if (user['email']) {
      const isValid = await compare(email, user['email']);
      if (isValid) return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { name: user.name, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
