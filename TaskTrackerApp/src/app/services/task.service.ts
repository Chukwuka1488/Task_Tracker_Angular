import { Injectable } from '@angular/core';
// import http client to connect backend to frontend
import { HttpClient, HttpHeaders } from '@angular/common/http';

// @Injectable({providedIn: 'root'})
// export class ServiceNameService {
//   constructor(private httpClient: HttpClient) { }

// }
import { Observable, of } from 'rxjs';
// the task interface or model
import { Task } from '../Task';
// // import the task data
// import { TASKS } from '../mock-task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }
}
