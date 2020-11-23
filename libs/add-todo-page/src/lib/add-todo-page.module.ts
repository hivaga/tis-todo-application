import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddTodoPageComponent} from './views/add-todo-page/add-todo-page.component';
import {RouterModule} from "@angular/router";
import {AddTodoPageRoutes} from "./add-todo-page.routes";
import {ComponentsModule} from "@tis-workspace/components";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const components = [AddTodoPageComponent]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(AddTodoPageRoutes), FormsModule, ReactiveFormsModule, ComponentsModule],
  declarations: [...components],
  exports: [...components]
})
export class AddTodoPageModule {
}
