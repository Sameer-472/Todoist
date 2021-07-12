import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './MyComponent/search-bar/search-bar.component';
import { FormModelComponent } from './MyComponent/form-model/form-model.component';
import { TodoComponent } from './MyComponent/todo/todo.component';
import { AddTodoComponent } from './MyComponent/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { TodoItemComponent } from './MyComponent/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    FormModelComponent,
    TodoComponent,
    AddTodoComponent,
    // MatSliderModule,
    // FormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSliderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
