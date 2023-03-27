import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('listusers')
  getUsers() {
    return this.usersService.getUsers();
  }

  @Delete('removeusers')
  remove() {
    return this.usersService.remove();
  }

  @Post('postusers')
  post() {
    return this.usersService.post();
  }

  @Put('updateusers')
  update() {
    return this.usersService.update();
  }
}
