import {Routes} from "@angular/router";
import {HomePageComponent} from "../view/pages/home-page/home-page.component";

export const ApplicationRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'todo',
    loadChildren: () => import('./../../../../libs/add-todo-page/src/lib/add-todo-page.module').then(m => m.AddTodoPageModule),
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]
