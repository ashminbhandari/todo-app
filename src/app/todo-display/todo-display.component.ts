import {Component, OnInit} from '@angular/core';
import {CoreService} from '../core.service';

@Component({
  selector: 'app-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css']
})
export class TodoDisplayComponent implements OnInit {
  entries: string[];

  // tslint:disable-next-line:variable-name
  constructor(private _coreService: CoreService) {
  }

  ngOnInit(): void {
    this._coreService.entries$.subscribe(
      e => {
        this.entries = e;
      });
  }

  deleteTodoEntry(nodeValue: string): void {
    this._coreService.removeEntry(nodeValue);
  }
}
