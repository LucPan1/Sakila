// create-rental.dto.ts
import { IsDateString, IsInt, IsOptional, Min, Max } from 'class-validator';

export class CreateRentalDto {
  @IsInt()
  customer_id: number;

  @IsInt()
  inventory_id: number; 

  @IsDateString()
  rental_date: Date; 

  @IsOptional()
  @IsDateString()
  return_date?: Date; 

  @IsOptional()
  @Min(7)
  @Max(21)
  rental_duration?: number; 
}
