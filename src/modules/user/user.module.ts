import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './user.service';
import { UserController } from './user.controller';

import { User } from '@microservice-user/entities';
import { UserGrpcController } from './user.grpc.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserController, UserGrpcController],
  exports: [UserService],
})
export class UserModule {}
