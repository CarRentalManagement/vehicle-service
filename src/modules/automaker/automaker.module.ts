import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Automaker } from '@microservice-vehicle/entities';

import { AutomakerService } from './automaker.service';
import { AutomakerController } from './automaker.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Automaker])],
  controllers: [AutomakerController],
  providers: [AutomakerService],
  exports: [AutomakerService],
})
export class AutomakerModule {}
