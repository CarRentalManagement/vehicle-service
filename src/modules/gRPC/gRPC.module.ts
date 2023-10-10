import { Module } from '@nestjs/common';
import { ConfigModule } from '@microservice-vehicle/module-config/config.module';
import { GrpcProvider } from './gRPC.provider';

@Module({
  imports: [ConfigModule],
  providers: [GrpcProvider],
  exports: [GrpcProvider],
})
export class GrpcModule {}
