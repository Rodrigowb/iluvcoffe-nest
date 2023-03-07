import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { MugsModule } from './mugs/mugs.module';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CoffeesModule,
    MugsModule,
    CoffeeRatingModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'pass123',
      database: 'postgres',
      autoLoadEntities: true,
      // TODO: remove synchronize for production
      synchronize: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
