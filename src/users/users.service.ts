import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers(): string {
    return 'Lisitng Users';
  }

  remove(): string {
    return 'removed';
  }

  update(): string {
    return 'updated';
  }

  post(): string {
    return 'posting';
  }
}
