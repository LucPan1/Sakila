import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Rental, Customer } from '@prisma/client';
import dayjs from 'dayjs';

@Injectable()
export class AppService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  
  getHello(): string {
    return 'Hello World!';
  }
 
  private async getRentalsByReminderDays(daysBefore: number) {
    const today = dayjs().startOf('day');
    const targetDate = today.add(daysBefore, 'day').toDate();

    const rentals = await this.rental.findMany({
      where: {
        return_date: {
          gte: dayjs(targetDate).startOf('day').toDate(),
          lt: dayjs(targetDate).endOf('day').toDate(),
        },
      },
      include: {
        customer: true,
      },
    });

    return rentals;
  }

  private async sendReminderEmails(rentals: (Rental & { customer: Customer | null  })[], daysBefore: number) {
    for (const rental of rentals) {
      const { customer } = rental;
      if (customer) {
        console.log(`Sending email to ${customer.email}: Your rental is due in ${daysBefore} days. Return date: ${rental.return_date}`);
      } else {
        console.log(`No customer found for rental ID ${rental.rental_id}`);
      }
    }
  }

  @Cron(CronExpression.EVERY_DAY_AT_NOON)
  async handleFiveDaysBeforeCron() {
    const rentalsFiveDaysBefore = await this.getRentalsByReminderDays(5);
    await this.sendReminderEmails(rentalsFiveDaysBefore, 5);
  }

  @Cron(CronExpression.EVERY_DAY_AT_NOON)
  async handleThreeDaysBeforeCron() {
    const rentalsThreeDaysBefore = await this.getRentalsByReminderDays(3);
    await this.sendReminderEmails(rentalsThreeDaysBefore, 3);
  }

  async getRentalsFiveDaysBefore() {
    return this.getRentalsByReminderDays(5);
  }

  async getRentalsThreeDaysBefore() {
    return this.getRentalsByReminderDays(3);
  }
}

