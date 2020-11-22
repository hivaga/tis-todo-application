import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoPageComponent } from './views/add-todo-page/add-todo-page.component';

const components = [AddTodoPageComponent]

@NgModule({
  imports: [CommonModule],
  declarations: [...components],
  exports:[...components]
})
export class AddTodoPageModule {}
