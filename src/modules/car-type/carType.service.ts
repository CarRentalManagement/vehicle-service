import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarType } from '@microservice-vehicle/entities';

import { CreateCarTypeDto } from './dto/create-car-type.dto';
import { UpdateCarTypeDto } from './dto/update-car-type.dto';

@Injectable()
export class CarTypeService {
  constructor(
    @InjectRepository(CarType)
    private carTypeRepository: Repository<CarType>,
  ) {}

  create(createCarTypeDto: CreateCarTypeDto) {
    return 'This action adds a new vehicleType';
  }

  async getOne({ id }: { id: number }) {
    const vehicleType = await this.carTypeRepository.findOne({
      where: {
        id: id,
      },
    });

    return vehicleType;
  }

  update(id: number, updateCarTypeDto: UpdateCarTypeDto) {
    return `This action updates a #${id} vehicleType`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicleType`;
  }
}
