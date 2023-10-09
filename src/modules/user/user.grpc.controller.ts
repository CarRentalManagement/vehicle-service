import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';

import { UserService } from './user.service';
import { GrpcMethod, RpcException } from '@nestjs/microservices';

@Controller()
export class UserGrpcController {
  constructor(private readonly usersService: UserService) {}

  @GrpcMethod('UserService')
  async getUserByEmail(data: any) {
    try {
      const { email } = data;
      console.log(email);
      const users = await this.usersService.getByEmail(email);
      return users;
    } catch (err) {
      throw new RpcException({ message: err.message });
    }
  }

  @GrpcMethod('UserService')
  async createUser(data: any) {
    try {
      const user = await this.usersService.createUser(data);
      return user;
    } catch (err) {
      throw new RpcException({ message: err.message });
    }
  }
}
