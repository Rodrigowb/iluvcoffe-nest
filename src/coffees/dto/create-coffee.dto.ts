// Data transfer object (validate incomming requests)

import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  // Make the properties required
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  // Expected value is an array of strings
  @IsString({each: true})
  readonly flavors: string[];
}
