import { PartialType } from '@nestjs/mapped-types';
import { CreateMugsDto } from './create-mugs.dto'

export class UpdateMugsDto extends PartialType(CreateMugsDto){}
