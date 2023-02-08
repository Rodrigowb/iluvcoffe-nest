import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MugsController } from './mugs/mugs.controller';
import { CoffeesModule } from './coffees/coffees.module';
import { MugsService } from './mugs/mugs.service';
import { MugsModule } from './mugs/mugs.module';

@Module({
  imports: [CoffeesModule, MugsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
