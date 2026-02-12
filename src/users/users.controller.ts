import { Body, Controller, Post } from '@nestjs/common';
import { CreateuserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  createUser(@Body() request: CreateuserDto) {}
}
