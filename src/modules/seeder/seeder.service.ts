import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { faker } from '@faker-js/faker';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcryptjs');

// Entity
import { User } from '@microservice-user/entities';

@Injectable()
export class SeederService {
  constructor(
    private readonly logger: Logger,

    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async seed() {
    await this.seedUsers();
  }

  async seedUsers() {
    try {
      // Detele all user
      await this.userRepo.delete({});

      // Create new user
      const users = [];
      await Promise.all(users);

      this.logger.debug('Successfuly completed seeding users...');
    } catch (error) {
      console.log(error);
      this.logger.error('Failed seeding users...');
    }
  }
}
