import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private _uiService: UiService) {

    this.subscription = this._uiService.onToggle()
      .subscribe(value => this.showAddTask = value)
  }
  // lifecycle method: to make an http request
  ngOnInit(): void {
  }

  toggleAddTask() {
    this._uiService.toggleAddTask();
  }
}
