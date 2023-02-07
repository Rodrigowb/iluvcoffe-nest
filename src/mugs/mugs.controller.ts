import { Controller, Get, Query, Param, Post, Body, Patch, Delete } from '@nestjs/common';

@Controller('mugs')
export class MugsController {
  // Endpoints go here
  // Get request to get all mugs with pagination

  @Get()
  findAll(@Query() paginationQuery) {
    // Destructure object
    const { limit, offset } = paginationQuery
    return `Endpoint get all mugs with pagination. Limit: ${limit} Offset: ${offset}`
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Endpoint returns a mug by it's id #${id}`
  }

  @Post()
  create(@Body('name') body) {
    return `Endpoint creats a mug. Name of mug created: ${body}`
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body('name') body) {
    return `Endpoint updates a mug. Updating id#${id} to new body named #${body}`
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Endpoint delets a mug. Deleting mug id#${id}`
  }

}
