import { Injectable } from '@nestjs/common';
import { CreateAutomakerDto } from './dto/create-automaker.dto';
import { UpdateAutomakerDto } from './dto/update-automaker.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Automaker } from '@microservice-vehicle/entities';
import { Repository } from 'typeorm';

@Injectable()
export class AutomakerService {
  constructor(
    @InjectRepository(Automaker)
    private automakerRepository: Repository<Automaker>,
  ) {}

  create(createAutomakerDto: CreateAutomakerDto) {
    return 'This action adds a new automaker';
  }

  async getOne({ id }: { id: number }) {
    const automaker = await this.automakerRepository.findOne({
      where: {
        id: id,
      },
    });

    return automaker;
  }

  update(id: number, updateAutomakerDto: UpdateAutomakerDto) {
    return `This action updates a #${id} automaker`;
  }

  remove(id: number) {
    return `This action removes a #${id} automaker`;
  }
}
