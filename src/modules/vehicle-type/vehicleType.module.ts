import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VehicleType } from '@microservice-vehicle/entities';

import { VehicleTypeService } from './vehicleType.service';
import { VehicleTypeController } from './vehicleType.controller';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleType])],
  controllers: [VehicleTypeController],
  providers: [VehicleTypeService],
  exports: [VehicleTypeService],
})
export class VehicleTypeModule {}
