import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  // tslint:disable-next-line:variable-name
  private readonly _entriesSource = new BehaviorSubject<string[]>([]);
  readonly entries$ = this._entriesSource.asObservable();

  constructor() { }
  private get entries(): string[] {
    return this._entriesSource.getValue();
  }
  private set entries(entry: string[]) {
    this._entriesSource.next(entry);
  }
  addEntry(entry: string): void {
    this.entries = [
      ...this.entries, entry
    ];
  }
  removeEntry(entry: string): void {
    this.entries = this.entries.filter(e => e !== entry );
  }
}
