import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Res,
  Body,
} from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('listusers')
  getUsers(@Res() response) {
    response.status(200).json({ id: 1, name: 'some' });
    // return this.usersService.getUsers();
  }
  @Get('queryParams')
  findOneQuery(@Query() queryParams: string): any {
    return queryParams;
  }

  @Get(':id')
  findOne(@Param('id') id: string): any {
    return 'hello';
  }


  @Delete('removeusers')
  remove() {
    return this.usersService.remove();
  }

  @Post('postusers')
  post() {
    return this.usersService.post();
  }

  @Post('postuser')
  postUser(@Body() payload): string {
    console.log(payload);
    return 'sfg';
    // return this.usersService.post();
  }

  @Put('updateusers')
  update() {
    return this.usersService.update();
  }
}
