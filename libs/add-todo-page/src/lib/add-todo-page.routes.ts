import {AddTodoPageComponent} from "./views/add-todo-page/add-todo-page.component";
import {Routes} from "@angular/router";

export const AddTodoPageRoutes: Routes = [
  {
    path: '',
    component: AddTodoPageComponent,
    pathMatch: 'full'
  },
];
