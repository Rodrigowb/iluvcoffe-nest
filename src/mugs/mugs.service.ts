import { Injectable } from '@nestjs/common';
import { Mugs } from './entities/mugs.entity';

@Injectable()
export class MugsService {
  private mugs: Mugs[] = [
    {
      id: 1,
      name: 'Mandalorian mug',
      brand: 'Lucas Films',
      colors: ['Black', 'Red']
    }
  ];

  findAll() {
    return this.mugs
  }

  findOne(id: string) {
    const mugs = this.mugs.find(item => item.id === +id);
    return mugs;
  }

  create(createMugsDto: any) {
    this.mugs.push(createMugsDto)
  }

  update(id: string, updateMugsDto: any) {
    const existingMug = this.findOne(id);
    if (existingMug) {
      // Update the selected object
    }
  }

  remove(id: string) {
    const mugsIndex = this.mugs.findIndex(item => item.id === +id);
    if (mugsIndex >= 0) {
      this.mugs.splice(mugsIndex, 1)
    }
  }


}
