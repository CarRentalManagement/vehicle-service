import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Automaker } from './automaker.entity';

@Entity('countries')
export class Country extends BaseEntity {
  @Column()
  public name: string;

  @Column()
  public logo: string;

  @OneToMany(() => Automaker, (automaker: Automaker) => automaker.country)
  automakers: Automaker[];
}
