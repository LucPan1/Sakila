import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { AppService } from '../app.service'; 
import { EmailService } from '../emails/email.service'; 
import { ScheduledTasksService } from '../schedule/scheduled-tasks.service'; 

@Injectable()
export class RentalScheduler {  
  constructor(
    private readonly prisma: AppService,
    private readonly emailService: EmailService,
    private readonly scheduledTasksService: ScheduledTasksService,
  ) {
    // Enregistrement des tâches planifiées dès la création du service
    this.scheduledTasksService.registerTask('Scheduled task: Send reminder email 5 days before return date');
    this.scheduledTasksService.registerTask('Scheduled task: Send reminder email 3 days before return date');
  }

  @Cron('0 12 * * *') // Exécute tous les jours à 12h00
  async handleScheduledEmails() {
    const now = new Date();

    // Envoi des e-mails à J-5
    await this.sendReminderEmails(now, 5);

    // Envoi des e-mails à J-3
    await this.sendReminderEmails(now, 3);
  }

  // méthode pour lancer manuellement les tâches
  // async triggerScheduledEmailsManually() {
  //   const now = new Date();
  //   console.log('Manually triggering scheduled emails');
  //   await this.sendReminderEmails(now, 5);
  //   await this.sendReminderEmails(now, 3);
  // }

  private async sendReminderEmails(now: Date, daysBefore: number) {
    const targetDate = new Date(now);
    targetDate.setDate(targetDate.getDate() + daysBefore);
    const targetDateStartOfDay = new Date(targetDate.setHours(0, 0, 0, 0));

    const rentals = await this.prisma.rental.findMany({
      where: {
        return_date: targetDateStartOfDay,
      },
      include: {
        customer: true,
      },
    });

    for (const rental of rentals) {
      const { customer, rental_date, return_date } = rental;
      console.log(`Email sent to ${customer.email}: Reminder for rental starting on ${rental_date} and returning on ${return_date}, ${daysBefore} days remaining.`);
      await this.emailService.sendReminderEmail(customer.email, rental_date, return_date, daysBefore);
    }
  }
}
