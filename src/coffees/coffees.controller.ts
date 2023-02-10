import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto'

@Controller('coffees')
export class CoffeesController {
  // Inject services in the controller
  constructor(private readonly coffeesService: CoffeesService) {

  }
  @Get('flavors')
    // Use query to paginate the response
  findAll(@Query() paginationQuery) {
    // Object destructuring to come in every request
    // const { limit, offset } = paginationQuery;
    // return `This action returns all coffees. Limit: ${limit}, offset: ${offset}`;
    return this.coffeesService.findAll();
  }

  // Return route parameters
  @Get(':id')
  findOne(@Param('id') id: string) {
    // return `This action returns #${id} coffee`;
    return this.coffeesService.findOne(id);
  }

  // Request body/ payload
  @Post()  
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    // return body;
    return this.coffeesService.create(createCoffeeDto);
  }

  // Update patch request
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    // return `This action updates #${id} coffee`
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  // Delete requests
  @Delete(':id')
  remove(@Param('id') id: string) {
    // return `This action removes #${id} coffee`
    return this.coffeesService.remove(id);
  }


}
 