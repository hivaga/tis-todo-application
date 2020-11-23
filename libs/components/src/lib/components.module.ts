import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AddItemComponent} from './add-item/add-item.component';
import {MatInputModule} from "@angular/material/input";
import {ItemsListComponent} from './items-list/items-list.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FlexModule} from "@angular/flex-layout";
import {MatTableModule} from "@angular/material/table";


const angularMaterialModules = [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatTableModule];

const components = [AddItemComponent, ItemsListComponent];

@NgModule({
  declarations: [AddItemComponent, ItemsListComponent],
  imports: [CommonModule, FlexModule, FormsModule, ReactiveFormsModule, ...angularMaterialModules],
  exports: [...components]
})
export class ComponentsModule {
}
