import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '@microservice-vehicle/module-database/database.module';
import { ConfigModule } from '@microservice-vehicle/module-config/config.module';

import { SeederService } from './seeder.service';

@Module({
  imports: [ConfigModule, DatabaseModule, TypeOrmModule.forFeature([])],
  providers: [SeederService, Logger],
})
export class SeederModule {}
