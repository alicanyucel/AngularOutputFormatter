import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
work:string="";
@Output() addEvent=new EventEmitter<string>;
add(){
  this.addEvent.emit(this.work);
  this.work="";
}
}
