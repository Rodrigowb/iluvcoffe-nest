import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  // Inject services in the controller
  constructor(private readonly coffeesService: CoffeesService) {
    
  }
  @Get('flavors')
    // Use query to paginate the response
  findAll(@Query() paginationQuery) {
    // Object destructuring to come in every request
    const { limit, offset } = paginationQuery;
    return `This action returns all coffees. Limit: ${limit}, offset: ${offset}`;
  }

  // Return route parameters
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }

  // Request body/ payload
  @Post()  
  create(@Body('name') body) {
    return body;
  }

  // Update patch request
  @Patch(':id')
  update(@Param('id') id: String, @Body() body) {
    return `This action updates #${id} coffee`
  }

  // Delete requests
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} coffee`
  }


}
 