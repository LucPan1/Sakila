import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';
import { CreateCustomerDto } from './create-customer.dto';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
  @IsOptional()
  @IsNumber()
  store_id?: number;

  @IsOptional()
  @IsString()
  first_name?: string;

  @IsOptional()
  @IsString()
  last_name?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsNumber()
  address_id?: number;

  @IsOptional()
  @IsBoolean()
  activebool?: boolean;

  @IsOptional()
  @IsNumber()
  active?: number;
}
