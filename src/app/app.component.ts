import { Component } from '@angular/core';
import { Todo } from './Todo';

let a: Todo ={task: "make bed", completed: false};
let b: Todo ={task: "shovel snow", completed: true};
let c: Todo ={task: "cook", completed: false};
let d: Todo ={task: "clean", completed: true};
let e: Todo ={task: "jumping jacks", completed: false};




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'To Do List';
  
  
  tasks: Todo[] = [a,b,c,d,e];
 
   f: Todo={task: "", completed: false};
 

   completeTask(abc: Todo){
      abc.completed = true;

    }

    removeTask(abc: Todo, efg: Todo[]){
      efg.splice(efg.findIndex(item => item.task === abc.task),1);

    }

    addTask(){
      

      this.tasks.push(this.f);

    }
    
}




