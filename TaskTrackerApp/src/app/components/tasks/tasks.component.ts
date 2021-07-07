import { Component, OnInit } from '@angular/core';
// import service
import { TaskService } from 'src/app/services/task.service';
// the task interface or model
import { Task } from 'src/app/Task';
// the task data
// import { TASKS } from 'src/app/mock-task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private _taskService: TaskService) {

  }

  ngOnInit(): void {
    this._taskService
      .getTasks()
      .subscribe(
        (tasks) => this.tasks = tasks
      )
  }

  deleteTask(task: Task) {
    this._taskService
      .deleteTask(task)
      .subscribe(
        () => this.tasks = this.tasks
          .filter(t => t.id !== task.id))
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this._taskService
      .updateTaskReminder(task)
      .subscribe()
  }

  addTask(task: Task) {
    // console.log(task)
    this._taskService
      .addTask(task)
      .subscribe(
        (tasks) => this.tasks.push(task)
      );
  }

}
