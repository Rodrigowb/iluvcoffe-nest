import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { MugsController } from './mugs/mugs.controller';
import { CoffeesService } from './coffees/coffees.service';

@Module({
  imports: [],
  controllers: [AppController, CoffeesController, MugsController],
  providers: [AppService, CoffeesService],
})
export class AppModule {}
