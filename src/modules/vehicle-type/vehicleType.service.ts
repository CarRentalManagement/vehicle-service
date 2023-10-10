import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VehicleType } from '@microservice-vehicle/entities';

import { CreateVehicleTypeDto } from './dto/create-vehicle-type.dto';
import { UpdateVehicleTypeDto } from './dto/update-vehicle-type.dto';

@Injectable()
export class VehicleTypeService {
  constructor(
    @InjectRepository(VehicleType)
    private vehicleTypeRepository: Repository<VehicleType>,
  ) {}

  create(createVehicleTypeDto: CreateVehicleTypeDto) {
    return 'This action adds a new vehicleType';
  }

  async getOne({ id }: { id: number }) {
    const vehicleType = await this.vehicleTypeRepository.findOne({
      where: {
        id: id,
      },
    });

    return vehicleType;
  }

  update(id: number, updateVehicleTypeDto: UpdateVehicleTypeDto) {
    return `This action updates a #${id} vehicleType`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicleType`;
  }
}
