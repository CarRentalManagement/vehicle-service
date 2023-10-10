import { Module, MiddlewareConsumer } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from '@microservice-vehicle/module-database/database.module';
import { LoggerModule } from '@microservice-vehicle/module-log/logs.module';
import { AuthModule } from '@microservice-vehicle/module-auth/auth.module';
import { VehicleModule } from '@microservice-vehicle/module-vehicle/vehicle.module';
import { VehicleTypeModule } from '@microservice-vehicle/module-vehicle-type/vehicleType.module';
import { AutomakerModule } from '@microservice-vehicle/module-automaker/automaker.module';

import { LoggerMiddleware } from '@microservice-vehicle/config-middlewares';
import { TransformInterceptor } from '@microservice-vehicle/config-interceptors';
import { AllExceptionsFilter } from '@microservice-vehicle/config-exceptions';

import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
  imports: [
    LoggerModule,
    ConfigModule,
    DatabaseModule,
    AuthModule,
    VehicleModule,
    VehicleTypeModule,
    AutomakerModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
