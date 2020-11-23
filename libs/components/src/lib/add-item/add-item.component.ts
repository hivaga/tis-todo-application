import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'tis-shared-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  @Output()
  readonly addItem:EventEmitter<string> = new EventEmitter<string>();

  readonly addItemFormControl:FormControl;


  constructor() {
    this.addItemFormControl = new FormControl('', [
      Validators.required
    ]);
  }

  ngOnInit(): void {
    this.clean();
  }

  onClickHandler(){
    this.addItem.emit(this.currentValue);
    this.clean();
  }

  clean(){
    this.addItemFormControl.reset();
  }

  get currentValue(){
    return this.addItemFormControl.value;
  }

}
