import { Controller, Get, Post } from '@nestjs/common';
import { ScheduledTasksService } from './scheduled-tasks.service'; // Assurez-vous que le chemin est correct

@Controller('scheduled-tasks')
export class ScheduledTasksController {
  constructor(private readonly scheduledTasksService: ScheduledTasksService) {}

  @Get()
  listTasks() {
    console.log('Fetching scheduled tasks');
    return this.scheduledTasksService.listTasks();
  }
}
