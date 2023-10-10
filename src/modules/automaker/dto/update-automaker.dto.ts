import { PartialType } from '@nestjs/swagger';
import { CreateAutomakerDto } from './create-automaker.dto';

export class UpdateAutomakerDto extends PartialType(CreateAutomakerDto) {}
