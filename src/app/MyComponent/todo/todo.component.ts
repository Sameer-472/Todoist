import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  x : boolean
  localItem : string
  // obj: any
  todo: Todo[] = []
  // getTodo: Array =  
  constructor(  ) {
    // console.log(this.todo);
    this.todo = [] 
    this.localItem = localStorage.getItem("todo") 
    if(this.localItem == null){
      this.todo = []
      // console.log(this.todo)
      
    } 
    else{
      this.todo = JSON.parse(this.localItem)
      // this.todo.push(this.)
      // this.todo.push( JSON.parse(this.localItem))
      console.log(this.todo)      
    }

  }

  ngOnInit(): void {
  }

  onClick(todo: Todo){
    console.log("delete");
    // console.log(todo);
    const index = this.todo.indexOf(todo);
    console.log(index)
    this.todo.splice(index , 1)
    localStorage.setItem("todo" , JSON.stringify(this.todo))
  }

  addTodo(todo : Todo){
    this.todo.push(todo)
    localStorage.setItem("todo" , JSON.stringify(this.todo))
    console.log(this.todo)
  }

  onCheck(todo: Todo){
    const index = this.todo.indexOf(todo);
    console.log(this.todo[index].title)
    
  }

  toggleCheckBox(todo: Todo , event: any){
    const index = this.todo.indexOf(todo);
    this.todo[index].active = !this.todo[index].active
    event.target.checked =  ! this.todo[index].active
    localStorage.setItem("todo" , JSON.stringify(this.todo))
  }

  // ischecked(event: any){
  // this.x = event.target.checked
  // localStorage.setItem("todo" , JSON.stringify(this.todo))
  //   // console.log()
  // }
}
