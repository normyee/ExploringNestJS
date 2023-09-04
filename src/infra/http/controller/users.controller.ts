import {
  Controller,
  Get,
  Body,
  Post,
  BadRequestException,
} from '@nestjs/common';
import { User } from 'src/domain/entities/user';
import { UsersService } from 'src/application/services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('list')
  findAll(): any[] {
    return this.usersService.findAll();
  }

  @Post('new')
  create(@Body() user: User) {
    if (!user.email || !user.name)
      throw new BadRequestException('There is no user!');
    return this.usersService.create(user);
  }
}
