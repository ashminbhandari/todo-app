import { Component, OnInit } from '@angular/core';
import {CoreService} from '../core.service';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.css', '../app.component.css']
})
export class TodoEntryComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _coreService: CoreService) { }

  ngOnInit(): void {
  }

  sendTodoEntry(entryString: string): void {
    this._coreService.addEntry(entryString);
  }
}
