import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CarType } from '@microservice-vehicle/entities';

import { CarTypeService } from './carType.service';
import { CarTypeController } from './carType.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CarType])],
  controllers: [CarTypeController],
  providers: [CarTypeService],
  exports: [CarTypeService],
})
export class CarTypeModule {}
