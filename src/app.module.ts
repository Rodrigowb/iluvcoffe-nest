import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { MugsController } from './mugs/mugs.controller';

@Module({
  imports: [],
  controllers: [AppController, CoffeesController, MugsController],
  providers: [AppService],
})
export class AppModule {}
