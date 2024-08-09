import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  async sendReminderEmail(email: string, rentalDate: Date, returnDate: Date, daysBefore: number) {
    console.log(`Sending email to ${email}: Your rental is due to return in ${daysBefore} days.`);
    console.log(`Rental Date: ${rentalDate}`);
    console.log(`Return Date: ${returnDate}`);
  }
}
