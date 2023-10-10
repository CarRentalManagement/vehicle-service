import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AutomakerService } from './automaker.service';
import { CreateAutomakerDto } from './dto/create-automaker.dto';
import { UpdateAutomakerDto } from './dto/update-automaker.dto';

@Controller('automaker')
export class AutomakerController {
  constructor(private readonly automakerService: AutomakerService) {}

  @Post()
  create(@Body() createAutomakerDto: CreateAutomakerDto) {
    return this.automakerService.create(createAutomakerDto);
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    return await this.automakerService.getOne({ id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAutomakerDto: UpdateAutomakerDto,
  ) {
    return this.automakerService.update(+id, updateAutomakerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.automakerService.remove(+id);
  }
}
