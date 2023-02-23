// Handle migrations

import { Coffee } from "src/coffees/entities/coffee.entity";
import { Flavor } from "src/coffees/entities/flavor.entity";
import { CoffeeRefactor1677151520210 } from "src/migrations/1677151520210-CoffeeRefactor";
import { SchemaSync1677152459994 } from "src/migrations/1677152459994-SchemaSync";
import { DataSource } from "typeorm";

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1677151520210, SchemaSync1677152459994]
})