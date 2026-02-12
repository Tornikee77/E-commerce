import { Injectable } from '@nestjs/common';
import { CreateuserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  createUser(data: CreateuserDto) {}
}
