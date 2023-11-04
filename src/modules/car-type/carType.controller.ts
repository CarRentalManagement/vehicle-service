import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CarTypeService } from './carType.service';
import { CreateCarTypeDto } from './dto/create-car-type.dto';
import { UpdateCarTypeDto } from './dto/update-car-type.dto';

@Controller('car-type')
export class CarTypeController {
  constructor(private readonly vehicleTypeService: CarTypeService) {}

  @Post()
  create(@Body() createVehicleTypeDto: CreateCarTypeDto) {
    return this.vehicleTypeService.create(createVehicleTypeDto);
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    return await this.vehicleTypeService.getOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateVehicleTypeDto: UpdateCarTypeDto,
  ) {
    return this.vehicleTypeService.update(id, updateVehicleTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.vehicleTypeService.remove(id);
  }
}
