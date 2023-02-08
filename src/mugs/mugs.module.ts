import { Module } from '@nestjs/common';
import { MugsController } from './mugs.controller';
import { MugsService } from './mugs.service';

@Module({controllers: [MugsController], providers: [MugsService]})
export class MugsModule {}
