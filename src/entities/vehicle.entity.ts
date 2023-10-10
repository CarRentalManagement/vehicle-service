import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { VehicleType } from './vehicleType.entity';
import { Automaker } from './automaker.entity';

export enum VEHICLE_STATUS {
  INACTIVE = 0,
  AVAILABLE = 1,
  RENTED = 2,
  RESERVED = 3,
}

@Entity('vehicles')
export class Vehicle extends BaseEntity {
  @Column()
  public ownerId: number;

  @Column()
  public name: string;

  @Column({ nullable: true })
  public yearOfManufacture: string;

  @Column({ nullable: true })
  public color: string;

  @Column('text', { array: true })
  public images: string[];

  @Column({
    type: 'enum',
    enum: VEHICLE_STATUS,
    default: VEHICLE_STATUS.AVAILABLE,
  })
  public status: VEHICLE_STATUS;

  @Column()
  public pricePerHour: number;

  @Column()
  public pricePerDay: number;

  @Column({ default: 0 })
  public deposit: number; // 0-100%

  @ManyToOne(() => VehicleType, (type: VehicleType) => type.vehicles)
  public type: VehicleType;

  @ManyToOne(() => Automaker, (automaker: Automaker) => automaker.vehicles)
  public automaker: Automaker;
}
