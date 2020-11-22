import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MainPageComponent} from "../view/pages/main-page/main-page.component";
import {AddTodoPageComponent} from "../view/pages/add-todo-page/add-todo-page.component";


const tisComponents = [MainPageComponent, AddTodoPageComponent]


@NgModule({
  declarations: [...tisComponents],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [MainPageComponent],
})
export class AppModule {}
