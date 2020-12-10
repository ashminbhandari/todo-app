import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoEntryComponent } from './todo-entry/todo-entry.component';
import { TodoDisplayComponent } from './todo-display/todo-display.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoEntryComponent,
    TodoDisplayComponent,
  ],
  imports: [
    BrowserModule
  ],
  exports: [TodoEntryComponent, TodoDisplayComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
