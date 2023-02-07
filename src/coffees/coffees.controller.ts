import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavors')
  findAll() {
    return 'This action returns all coffees';
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
 