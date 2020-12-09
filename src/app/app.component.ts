import {Component, OnInit} from '@angular/core';
import {CoreService} from './core.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'todo-app';

  // tslint:disable-next-line:variable-name
  constructor(private _coreService: CoreService) {}
  ngOnInit(): void {
    this._coreService.todoEntry$.subscribe(
      todoEntry => {
        if (todoEntry) {
          console.log(todoEntry);
        }
      }
    );
  }
}
