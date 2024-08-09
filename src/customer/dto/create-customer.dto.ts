import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';

export class CreateCustomerDto {
  @IsOptional()
  @IsNumber()
  store_id: number;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  email: string;

  @IsOptional()
  @IsNumber()
  address_id: number;

  @IsOptional()
  @IsBoolean()
  activebool: boolean;

  @IsOptional()
  @IsNumber()
  active: number;
}