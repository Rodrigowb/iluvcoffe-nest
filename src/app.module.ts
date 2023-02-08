import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MugsController } from './mugs/mugs.controller';
import { CoffeesModule } from './coffees/coffees.module';
import { MugsService } from './mugs/mugs.service';

@Module({
  imports: [CoffeesModule],
  controllers: [AppController, MugsController],
  providers: [AppService, MugsService],
})
export class AppModule {}
