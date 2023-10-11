import { PaginationDto } from '@microservice-vehicle/module-common/pagination/dto/pagination.dto';
import { Type } from 'class-transformer';
import { IsString, IsOptional, IsArray } from 'class-validator';

export class GetVehiclesDto extends PaginationDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsArray()
  @IsOptional()
  @Type(() => Number)
  typeIds: number[];

  @IsString()
  @IsOptional()
  color: string;

  @IsArray()
  @IsOptional()
  @Type(() => Number)
  automakerIds: number[];
}
