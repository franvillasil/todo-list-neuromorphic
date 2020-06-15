import { Item } from './models/item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public items: Item[] = [
    {
      title: 'Eat healthy',
      date: '14/06/2020',
      state: 'done',
      priority: 'high'
    },
    {
      title: 'Study english',
      date: '14/06/2020',
      state: 'in-progress',
      priority: 'high'
    },
    {
      title: 'Do exercise',
      date: '14/06/2020',
      state: 'done',
      priority: 'low'
    },
    {
      title: 'Go on holidays',
      date: '14/06/2020',
      state: 'todo',
      priority: 'high'
    },
    {
      title: 'Clean my home',
      date: '14/06/2020',
      state: 'todo',
      priority: 'medium'
    },
    {
      title: 'Rest on sunday',
      date: '14/06/2020',
      state: 'in-progress',
      priority: 'high'
    },
    {
      title: 'Play videogames',
      date: '14/06/2020',
      state: 'done',
      priority: 'high'
    },
    {
      title: 'Play the guitar',
      date: '14/06/2020',
      state: 'todo',
      priority: 'low'
    },
    {
      title: 'Keep calm and code',
      date: '14/06/2020',
      state: 'in-progress',
      priority: 'medium'
    },

  ];

  public todoItems: Item[] = [];
  public inProgressItems: Item[] = [];
  public doneItems: Item[] = [];

  ngOnInit() {
    this.fillList();
  }

  fillList(){
    this.items.forEach(item => {
      switch (item.state) {
        case 'todo':
          this.todoItems.push(item);
          break;
        case 'in-progress':
          this.inProgressItems.push(item);
          break;
        case 'done':
          this.doneItems.push(item);
          break;
      }
    });
  }
}
