import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { MugsModule } from './mugs/mugs.module';

@Module({
  imports: [CoffeesModule, MugsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
