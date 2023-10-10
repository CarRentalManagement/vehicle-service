import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VehicleTypeService } from './vehicleType.service';
import { CreateVehicleTypeDto } from './dto/create-vehicle-type.dto';
import { UpdateVehicleTypeDto } from './dto/update-vehicle-type.dto';

@Controller('vehicle-type')
export class VehicleTypeController {
  constructor(private readonly vehicleTypeService: VehicleTypeService) {}

  @Post()
  create(@Body() createVehicleTypeDto: CreateVehicleTypeDto) {
    return this.vehicleTypeService.create(createVehicleTypeDto);
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    return await this.vehicleTypeService.getOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateVehicleTypeDto: UpdateVehicleTypeDto,
  ) {
    return this.vehicleTypeService.update(id, updateVehicleTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.vehicleTypeService.remove(id);
  }
}
