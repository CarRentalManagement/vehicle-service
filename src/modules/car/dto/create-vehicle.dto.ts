import { VEHICLE_STATUS } from '@microservice-vehicle/entities';
import {
  IsString,
  IsOptional,
  IsArray,
  IsEnum,
  IsNumber,
  IsPositive,
} from 'class-validator';

export class CreateVehicleDto {
  userEmail: string;

  @IsString()
  name: string;

  @IsNumber()
  @IsPositive()
  pricePerHour: number;

  @IsNumber()
  @IsPositive()
  pricePerDay: number;

  @IsNumber()
  typeId: number;

  @IsArray()
  images: string[];

  @IsString()
  @IsOptional()
  yearOfManufacture?: string;

  @IsString()
  @IsOptional()
  color?: string;

  @IsString()
  @IsEnum(VEHICLE_STATUS)
  @IsOptional()
  status?: VEHICLE_STATUS;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  deposit?: number;

  @IsNumber()
  @IsOptional()
  automakerId?: number;
}
