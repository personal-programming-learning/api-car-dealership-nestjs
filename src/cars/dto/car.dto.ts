import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';
import { v4 as uuid } from 'uuid';

export class CreateCarDto {
  @IsUUID()
  readonly id: string = uuid();

  @IsString({ message: 'The brand most be a cool string' })
  readonly brand: string;

  @IsString()
  @MinLength(3)
  readonly model: string;
}

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string = uuid();

  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  readonly model?: string;
}
