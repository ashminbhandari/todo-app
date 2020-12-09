import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  // tslint:disable-next-line:variable-name
  private _todoEntrySource = new Subject<string>();

  todoEntry$ = this._todoEntrySource.asObservable();

  constructor() { }

  sendTodoEntry(todoEntry: string): void {
    this._todoEntrySource.next(todoEntry);
  }
}
