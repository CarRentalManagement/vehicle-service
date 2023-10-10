import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Country } from './country.entity';
import { Vehicle } from './vehicle.entity';

@Entity('automakers')
export class Automaker extends BaseEntity {
  @Column()
  public name: string;

  @ManyToOne(() => Country, (country: Country) => country.automakers)
  public country: Country;

  @OneToMany(() => Vehicle, (vehicle: Vehicle) => vehicle.automaker)
  vehicles: Vehicle[];
}
