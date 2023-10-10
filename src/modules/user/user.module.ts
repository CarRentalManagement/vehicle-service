import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GrpcModule } from '@microservice-vehicle/module-gRPC/gRPC.module';
import { UserGrpcService } from './user.grpc.service';

@Module({
  imports: [GrpcModule, TypeOrmModule.forFeature([])],
  providers: [UserGrpcService],
  exports: [UserGrpcService],
})
export class UserModule {}
