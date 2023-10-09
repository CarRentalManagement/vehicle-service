import { Controller } from '@nestjs/common';

import { UserService } from './user.service';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import CustomLogger from '@microservice-user/module-log/customLogger';

@Controller()
export class UserGrpcController {
  constructor(
    private readonly logger: CustomLogger,
    private readonly usersService: UserService,
  ) {
    logger.setContext(UserGrpcController.name);
  }

  @GrpcMethod('UserService')
  async getUserByEmail(data: any) {
    try {
      const { email } = data;
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

      this.logger.log('Successfuly created user', 'createUser');

      return user;
    } catch (err) {
      throw new RpcException({ message: err.message });
    }
  }
}
