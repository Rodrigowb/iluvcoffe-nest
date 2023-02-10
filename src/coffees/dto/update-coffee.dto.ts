import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

// Extands the CreateCoffeeDto to avoid code duplicity
// PartialTYpes make all inherited labels optional
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
