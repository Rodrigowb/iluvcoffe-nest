import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMugsDto } from './dto/create-mugs.dto';
import { UpdateMugsDto } from './dto/update-mugs.dto';
import { Mugs } from './entities/mugs.entity';


@Injectable()
export class MugsService {
  // Inject repository from our entity
  constructor(
    @InjectRepository(Mugs)
    private readonly mugsRepository: Repository<Mugs>,
  ) {}

  findAll() {
    return this.mugsRepository.find();
  }

  async findOne(id: string) {
    const mug = await this.mugsRepository.findOne({ where: { id: +id } });
    if (!mug) {
      throw new NotFoundException(`Mug #${id} not found`)
    }
    return mug;
  }

  create(createMugsDto: any) {
    this.mugs.push(createMugsDto)
  }

  update(id: string, updateMugsDto: any) {
    const existingMug = this.findOne(id);
    if (existingMug) {
      // Update the selected object
    } else {
      throw new NotFoundException(`Mug #${id} not found for updating`)
    }
  }

  remove(id: string) {
    const mugsIndex = this.mugs.findIndex(item => item.id === +id);
    if (mugsIndex >= 0) {
      this.mugs.splice(mugsIndex, 1)
    } else {
      throw new NotFoundException(`Mug #${id} not found to be removed`)
    }
  }


}
