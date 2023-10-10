import { GrpcService } from '@microservice-vehicle/module-gRPC/gRPC.service';
import { Injectable, Inject } from '@nestjs/common';
import { ClientGrpcProxy } from '@nestjs/microservices';
import {
  GetUserByEmailGrpcRequestDto,
  GetUserByEmailGrpcResponseDto,
} from './dto';

@Injectable()
export class UserGrpcService extends GrpcService {
  constructor(@Inject('GRPC_CLIENT') client: ClientGrpcProxy) {
    super(client, 'UserService');
  }

  async getUserByEmail({
    email,
  }: GetUserByEmailGrpcRequestDto): Promise<GetUserByEmailGrpcResponseDto> {
    const result = await this.execute('getUserByEmail', { email });

    return result;
  }
}
