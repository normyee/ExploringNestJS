import { Module } from '@nestjs/common';
import { AppController } from '../http/controller/app.controller';
import { AppService } from '../../application/services/app.service';
import { UsersModule } from './users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
