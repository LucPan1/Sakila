import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpException } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @Get()
  getCustomers() {
    return this.customerService.getCustomers();
  }

  @Get(':id')
  async getCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = await this.customerService.getCustomerById(id);
    if(!customer) throw new HttpException('Customer not found', 404)
    return customer;
    
  }

  @Patch(':id')
  updateCustomerById(
  @Param('id', ParseIntPipe) id: number,
  @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customerService.updateCustomerById(id, updateCustomerDto);
  }

  @Delete(':id')
  deleteCustomerById(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.deleteCustomerById(+id);
  }
}
