import { Component, OnInit } from '@angular/core';
import {CoreService} from '../core.service';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.css', '../app.component.css']
})
export class TodoEntryComponent implements OnInit {
  placeholder: string;
  // tslint:disable-next-line:variable-name
  constructor(private _coreService: CoreService) { }

  ngOnInit(): void {
    this.placeholder = 'Create a new entry';
  }

  sendTodoEntry(entryString: string): void {
    if (entryString) { this._coreService.addEntry(entryString); }
    else {
      this.placeholder = 'Please enter something';
    }
  }
}
