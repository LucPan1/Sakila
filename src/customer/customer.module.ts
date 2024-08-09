import { Module, forwardRef } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { AppModule } from '../app.module';

@Module({
  imports: [forwardRef(() => AppModule)],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
