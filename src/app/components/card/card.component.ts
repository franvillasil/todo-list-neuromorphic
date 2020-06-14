import { Item } from './../../models/item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item: Item;

  constructor() { }

  ngOnInit(): void {
    this.checkState();

  }

  checkState() {
    // tslint:disable-next-line: curly
    if (this.item.state === 'done') this.item.priority = 'done';
  }

}
