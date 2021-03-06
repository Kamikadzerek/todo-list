import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskName = 'Sugerowane zadanie codzienne: odkurzanie';
  taskDate = '';
  config: { [key: string]: string } = null;
  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2020-01-02',
      done: false
    },
    {
      name: 'Nauka angulara',
      deadline: '2020-01-03',
      done: false
    },
    {
      name: 'Sprzatanie kuwety',
      deadline: '2020-01-04',
      done: false
    }
  ];

  constructor(){
    setTimeout( () => {
      this.config = {
        title: 'Lista zadań',
        footer: '@ Lista zadań zbudowana w Angularze',
        date: new Date().toDateString()
      };
    }, 500);

  }
fgfgdf
  clearTasks() {
    this.tasks = [];
  }



  createTask(){
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';
  }




}
