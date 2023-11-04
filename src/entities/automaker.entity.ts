import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Car } from './car.entity';

@Entity('automakers')
export class Automaker extends BaseEntity {
  @Column()
  public name: string;

  @OneToMany(() => Car, (car: Car) => car.automaker)
  cars: Car[];
}
