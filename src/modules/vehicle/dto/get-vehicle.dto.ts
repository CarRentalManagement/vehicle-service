import { IsString, IsOptional, IsArray } from 'class-validator';

export class GetVehiclesDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsArray()
  @IsOptional()
  typeIds: number[];

  @IsString()
  @IsOptional()
  color: string;

  @IsArray()
  @IsOptional()
  automakerIds: number[];
}
