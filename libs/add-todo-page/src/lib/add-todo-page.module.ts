import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoPageComponent } from './views/add-todo-page/add-todo-page.component';
import {RouterModule} from "@angular/router";
import {AddTodoPageRoutes} from "./add-todo-page.routes";

const components = [AddTodoPageComponent]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(AddTodoPageRoutes)],
  declarations: [...components],
  exports:[...components]
})
export class AddTodoPageModule {}
