import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

import {ApplicationRoutes} from "./app.routes";
import {MainPageComponent} from "../view/pages/main-page/main-page.component";
import {HomePageComponent} from "../view/pages/home-page/home-page.component";

const tisComponents = [MainPageComponent, HomePageComponent]

@NgModule({
  declarations: [...tisComponents],
  imports: [BrowserModule, RouterModule.forRoot(ApplicationRoutes)],
  providers: [],
  bootstrap: [MainPageComponent],
})
export class AppModule {}
