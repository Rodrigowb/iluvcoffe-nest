import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './crate-coffee.dto'

// Extands the CreateCoffeeDto to avoid code duplicity
export class UpdateCoffeeDto extends PartialType{CreateCoffeeDto} {}
