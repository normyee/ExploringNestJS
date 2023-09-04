import { Module } from '@nestjs/common';
import { UsersService } from 'src/application/services/users.service';
import { UsersController } from '../http/controller/users.controller';

@Module({
  imports: [],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
