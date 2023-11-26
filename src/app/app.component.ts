import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularOutput';
  todos:string[]=[];
  add(event:string){
   this.todos.push(event);
  }
}
