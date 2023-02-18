import { Module } from '@nestjs/common';
import { MugsController } from './mugs.controller';
import { MugsService } from './mugs.service';
import { Mugs } from './entities/mugs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Color } from './entities/color.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mugs, Color])],
  controllers: [MugsController],
  providers: [MugsService]
})
export class MugsModule {}
