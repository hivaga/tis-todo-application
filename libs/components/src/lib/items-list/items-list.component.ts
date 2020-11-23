import {Component, Input} from '@angular/core';

export interface Item {
  name: string;
  position: number;
}

const ELEMENT_DATA: Item[] = [
];

@Component({
  selector: 'tis-shared-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {

  displayedColumns: string[] = ['position', 'name'];

  @Input('items')
  dataSource:Item[] = [];

  constructor() {}

}

