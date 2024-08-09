import { HttpException, Injectable } from '@nestjs/common';
import { AppService } from '../app.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class CustomerService {
  constructor(private readonly prisma: AppService) {}

  async create(data: Prisma.CustomerCreateInput) {
    return this.prisma.customer.create({ data })  
  }
  
  getCustomers() {
    return this.prisma.customer.findMany();
  }
  
  getCustomerById(id: number) {
    return this.prisma.customer.findUnique({
      where: { customer_id: id },
    });
  }

  async updateCustomerById(id: number, data: Prisma.CustomerUpdateInput) {
    const findCustomer = await this.getCustomerById(id);
    if(!findCustomer) throw new HttpException('Customer not found', 404)
    
    if (data.email) {
      const findCustomer = await this.prisma.customer.findUnique({
        where: { email: data.email as string},
      })
      if (findCustomer) throw new HttpException('Email already taken', 400)
    }
    return this.prisma.customer.update({ where: { customer_id: id }, data}) 
  }

  async deleteCustomerById(id: number) {
    const findCustomer = await this.getCustomerById(id);
    if(!findCustomer) throw new HttpException('Customer not found', 404)
      
    return this.prisma.customer.delete({
      where: { customer_id: id },
    });
  }

}
