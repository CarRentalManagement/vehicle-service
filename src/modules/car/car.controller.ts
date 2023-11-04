import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Query,
} from '@nestjs/common';
import { CarService } from './car.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { AuthGuard } from '@microservice-vehicle/module-auth/guard';
import { GetVehiclesDto } from './dto/get-vehicle.dto';

@Controller('/car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Req() req, @Body() createVehicleDto: CreateVehicleDto) {
    const user = req.user;

    return this.carService.create({
      ...createVehicleDto,
      userEmail: user?.email,
    });
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  getOne(@Param('id') id: number) {
    return this.carService.getOne(id);
  }

  @Get()
  @UseGuards(AuthGuard)
  getVehicles(@Query() query: GetVehiclesDto) {
    console.log(query);
    return this.carService.getVehicles(query);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(@Param('id') id: number, @Body() updateVehicleDto: UpdateVehicleDto) {
    return this.carService.update(id, updateVehicleDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.carService.remove(+id);
  }
}
