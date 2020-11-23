import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'tis-shared-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  addItemFormControl:FormControl;

  @Output()
  addItem:EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.addItemFormControl = new FormControl('', [
      Validators.required
    ]);
  }

  ngOnInit(): void {

  }

  onClickHandler(){
    this.addItem.emit(this.currentValue);
  }

  get currentValue(){
    return this.addItemFormControl.value;
  }

}
