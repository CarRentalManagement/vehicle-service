import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule } from '@microservice-user/module-config/config.module';
import { Log } from '@microservice-user/entities';

import LogsService from './logs.service';
import CustomLogger from './customLogger';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([Log])],
  providers: [CustomLogger, LogsService],
  exports: [CustomLogger],
})
export class LoggerModule {}
