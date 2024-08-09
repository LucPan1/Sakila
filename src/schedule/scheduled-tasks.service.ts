import { Injectable } from '@nestjs/common';

@Injectable()
export class ScheduledTasksService {
  private tasks: string[] = []; // Stockage pour les tâches planifiées

  registerTask(taskName: string) {
    console.log(`Registering task: ${taskName}`);
    this.tasks.push(taskName); // Enregistre la tâche dans le tableau
  }

  listTasks(): string[] {
    console.log(`Current tasks: ${this.tasks}`);
    return this.tasks; // Retourne la liste des tâches enregistrées
  }
}
