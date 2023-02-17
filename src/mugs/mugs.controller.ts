import { Controller, Get, Query, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { MugsService } from './mugs.service';
import { CreateMugsDto } from './dto/create-mugs.dto'
import { UpdateMugsDto } from './dto/update-mugs.dto'

@Controller('mugs')
export class MugsController {
  // Services go here in the class contructor (inject dependencies)
  constructor(private readonly mugsService: MugsService) {
    
  }

  // Endpoints go here
  @Get()
  findAll() {
    return this.mugsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mugsService.findOne(id)

  }

  @Post()
  create(@Body() createMugsDto: CreateMugsDto) {
    return this.mugsService.create(createMugsDto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMugsDto: UpdateMugsDto) {
    return this.mugsService.update(id, updateMugsDto)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.mugsService.remove(id)
  }

}
