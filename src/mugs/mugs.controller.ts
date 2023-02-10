import { Controller, Get, Query, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { MugsService } from './mugs.service';

@Controller('mugs')
export class MugsController {
  // Services go here in the class contructor (inject dependencies)
  constructor(private readonly mugsService: MugsService) {
    
  }

  // Endpoints go here
  @Get()
  findAll(@Query() paginationQuery) {
    // Destructure object
    // const { limit, offset } = paginationQuery
    // return `Endpoint get all mugs with pagination. Limit: ${limit} Offset: ${offset}`
    return this.mugsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return `Endpoint returns a mug by it's id #${id}`
    return this.mugsService.findOne(id)

  }

  @Post()
  create(@Body() body) {
    // return `Endpoint creats a mug. Name of mug created: ${body}`
    return this.mugsService.create(body)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body('name') body) {
    // return `Endpoint updates a mug. Updating id#${id} to new body named #${body}`
    return this.mugsService.update(id, body)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    // return `Endpoint delets a mug. Deleting mug id#${id}`
    return this.mugsService.remove(id)
  }

}
