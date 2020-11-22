import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MainPageComponent} from "../view/pages/main-page/main-page.component";
import {AddTodoPageModule} from "@tis-workspace/add-todo-page";

const tisComponents = [MainPageComponent]


@NgModule({
  declarations: [...tisComponents],
  imports: [BrowserModule, AddTodoPageModule],
  providers: [],
  bootstrap: [MainPageComponent],
})
export class AppModule {}
