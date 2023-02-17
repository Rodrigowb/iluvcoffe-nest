import { Module } from '@nestjs/common';
import { MugsController } from './mugs.controller';
import { MugsService } from './mugs.service';
import { Mugs } from './entities/mugs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Mugs])],
  controllers: [MugsController],
  providers: [MugsService]
})
export class MugsModule {}
