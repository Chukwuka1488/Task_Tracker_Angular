import { Injectable } from '@angular/core';
// import http client to connect backend to frontend
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// the task interface or model
import { Task } from '../Task';
// // import the task data
// import { TASKS } from '../mock-task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task): Observable<Task> {
    const deleteUrl = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(deleteUrl)
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const updateUrl = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(updateUrl, task, httpOptions)
  }
}
