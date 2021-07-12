import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})

export class AddTodoComponent implements OnInit {

  public title = "";
  // public description = "";

  @Output() sumbit = new EventEmitter(); 


  constructor() { }
  ngOnInit(): void {
  }

  onSubmit(){
    const todo = {
        title: this.title , 
        // description: this.description
  }
  console.log(this.title)
  // console.log(this.description)

  this.sumbit.emit(todo)
  console.log(todo)
  }
}
