import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Mugs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column('json', {nullable:true})
  colors: string[];
}