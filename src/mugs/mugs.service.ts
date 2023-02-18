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
    return this.mugsRepository.find({
      relations: {
        colors: true
      }
    });
  }

  async findOne(id: string) {
    const mug = await this.mugsRepository.findOne({
      where: { id: +id },
      relations: {
        colors: true
      }
    });
    if (!mug) {
      throw new NotFoundException(`Mug #${id} not found`)
    }
    return mug;
  }

  create(createMugsDto: CreateMugsDto) {
    const mug = this.mugsRepository.create(createMugsDto)
    return this.mugsRepository.save(mug)

  }

  async update(id: string, updateMugsDto: UpdateMugsDto) {
    const mug = await this.mugsRepository.preload({
      id: +id,
      ...updateMugsDto
    });
    if (!mug) {
      throw new NotFoundException(`Mug #${id} not found`);
    }
    return this.mugsRepository.save(mug)
  }

  async remove(id: string) {
    const mug = await this.findOne(id)
    return this.mugsRepository.remove(mug);
  
    }
  }

