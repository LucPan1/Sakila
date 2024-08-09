import { Module, forwardRef } from '@nestjs/common';
import { ScheduledTasksService } from './scheduled-tasks.service';
import { ScheduledTasksController } from './scheduled-tasks.controller';
import { AppModule } from 'src/app.module';
import { EmailModule } from 'src/emails/email.module';
import { RentalScheduler } from './rental.scheduler';

@Module({
  imports: [forwardRef(() => AppModule), EmailModule], 
  controllers: [ScheduledTasksController],
  providers: [ScheduledTasksService, RentalScheduler],
  exports: [ScheduledTasksService, RentalScheduler]
})
export class ScheduledTasksModule {}
