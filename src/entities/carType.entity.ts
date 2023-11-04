import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Car } from './car.entity';

@Entity('car-types')
export class CarType extends BaseEntity {
  @Column()
  public name: string;

  @Column()
  public numberOfSeat: number;

  @OneToMany(() => Car, (car: Car) => car.type)
  cars: Car[];
}
