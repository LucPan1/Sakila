import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './controllers/app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { RentalModule } from './rental/rental.module';
import { ScheduledTasksModule } from './schedule/scheduled-tasks.module'; 
import { EmailModule } from './emails/email.module';


@Module({
  imports: [
    ScheduleModule.forRoot(),  
    CustomerModule, RentalModule, ScheduledTasksModule, EmailModule
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService]
})
export class AppModule {}
