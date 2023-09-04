import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../domain/entities/user';

global.users = ['person1', 'person2', 'person3'];

@Injectable()
export class UsersService {
  findAll(): any[] {
    return global.users;
  }

  create(user: CreateUserDto) {
    global.users.push(user);
  }
}
