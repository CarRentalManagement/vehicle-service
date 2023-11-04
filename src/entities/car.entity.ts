import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity, VEHICLE_STATUS } from './base.entity';
import { CarType } from './carType.entity';
import { Automaker } from './automaker.entity';

@Entity('cars')
export class Car extends BaseEntity {
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

  @ManyToOne(() => CarType, (type: CarType) => type.cars)
  public type: CarType;

  @ManyToOne(() => Automaker, (automaker: Automaker) => automaker.cars)
  public automaker: Automaker;
}
