import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Vehicle } from './vehicle.entity';

@Entity('vehicle-types')
export class VehicleType extends BaseEntity {
  @Column()
  public name: string;

  @Column()
  public numberOfSeat: number;

  @OneToMany(() => Vehicle, (vehicle: Vehicle) => vehicle.type)
  vehicles: Vehicle[];
}
