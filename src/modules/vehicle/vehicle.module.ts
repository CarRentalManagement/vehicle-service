import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Vehicle } from '@microservice-vehicle/entities';
import { VehicleTypeModule } from '@microservice-vehicle/module-vehicle-type/vehicleType.module';
import { UserModule } from '@microservice-vehicle/module-user/user.module';
import { AutomakerModule } from '@microservice-vehicle/module-automaker/automaker.module';

import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { LoggerModule } from '@microservice-vehicle/module-log/logs.module';

@Module({
  imports: [
    VehicleTypeModule,
    AutomakerModule,
    UserModule,
    LoggerModule,
    TypeOrmModule.forFeature([Vehicle]),
  ],
  controllers: [VehicleController],
  providers: [VehicleService],
})
export class VehicleModule {}
