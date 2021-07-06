import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// the task interface or model
import { Task } from '../Task';
// import the task data
import { TASKS } from '../mock-task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
