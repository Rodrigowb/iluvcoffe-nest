import { IsString } from 'class-validator';

export class CreateMugsDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly brand: string;
  @IsString({each:true})
  readonly colors: string[];
}