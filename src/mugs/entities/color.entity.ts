import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Mugs } from "./mugs.entity";

@Entity()
export class Color {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(
    type => Mugs,
    mugs => mugs.colors,
  )
  mugs: Mugs[];
}