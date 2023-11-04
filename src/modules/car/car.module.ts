import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Car } from '@microservice-vehicle/entities';
import { CarTypeModule } from '@microservice-vehicle/module-car-type/carType.module';
import { UserModule } from '@microservice-vehicle/module-user/user.module';
import { AutomakerModule } from '@microservice-vehicle/module-automaker/automaker.module';

import { CarService } from './car.service';
import { CarController } from './car.controller';
import { LoggerModule } from '@microservice-vehicle/module-log/logs.module';

@Module({
  imports: [
    CarTypeModule,
    AutomakerModule,
    UserModule,
    LoggerModule,
    TypeOrmModule.forFeature([Car]),
  ],
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule {}
