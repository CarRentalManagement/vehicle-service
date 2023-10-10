import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SeederService {
  constructor(private readonly logger: Logger) {}

  async seed() {
    await this.seedUsers();
  }

  async seedUsers() {
    try {
      this.logger.debug('Successfuly completed seeding users...');
    } catch (error) {
      console.log(error);
      this.logger.error('Failed seeding users...');
    }
  }
}
