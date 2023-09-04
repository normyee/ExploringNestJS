import { Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user';

global.users = ['person1', 'person2', 'person3'];

@Injectable()
export class UsersService {
  findAll(): any[] {
    return global.users;
  }

  create(user: User) {
    global.users.push(user);
  }
}
