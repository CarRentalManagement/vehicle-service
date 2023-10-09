import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '@microservice-user/entities';

import { DatabaseModule } from '@microservice-user/module-database/database.module';
import { ConfigModule } from '@microservice-user/module-config/config.module';

import { SeederService } from './seeder.service';

@Module({
  imports: [ConfigModule, DatabaseModule, TypeOrmModule.forFeature([User])],
  providers: [SeederService, Logger],
})
export class SeederModule {}
