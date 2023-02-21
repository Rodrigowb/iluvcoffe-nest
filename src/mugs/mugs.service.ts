import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { Repository } from 'typeorm';
import { CreateMugsDto } from './dto/create-mugs.dto';
import { UpdateMugsDto } from './dto/update-mugs.dto';
import { Color } from './entities/color.entity';
import { Mugs } from './entities/mugs.entity';


@Injectable()
export class MugsService {
  // Inject repository from our entity
  constructor(
    @InjectRepository(Mugs)
    private readonly mugsRepository: Repository<Mugs>,
    @InjectRepository(Color)
    private readonly colorRepository: Repository<Color>
  ) {}

  findAll(PaginationQuery: PaginationQueryDto) {
    const { limit, offset } = PaginationQuery;
    return this.mugsRepository.find({
      relations: {
        colors: true
      },
      skip: offset,
      take: limit
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

  async create(createMugsDto: CreateMugsDto) {
    const colors = await Promise.all(
      createMugsDto.colors.map(name => this.preloadColorByName(name))
    );
    const mug = this.mugsRepository.create({
      ...createMugsDto,
      colors,
    })
    return this.mugsRepository.save(mug)

  }

  async update(id: string, updateMugsDto: UpdateMugsDto) {
    const colors = updateMugsDto && (await Promise.all(
      updateMugsDto.colors.map(name => this.preloadColorByName(name))
    ))

    const mug = await this.mugsRepository.preload({
      id: +id,
      ...updateMugsDto,
      colors
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
  
  // Check if a color already exists to avoid duplicity in cascadian inserts
  private async preloadColorByName(name: string): Promise<Color>{
    const existingColor = await this.colorRepository.findOne({
      where: { name },
    });
    if (existingColor) {
      return existingColor;
    }
    return this.colorRepository.create({ name });
  }
  }

