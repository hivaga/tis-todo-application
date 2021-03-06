import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

import {ApplicationRoutes} from "./app.routes";
import {MainPageComponent} from "../view/pages/main-page/main-page.component";
import {HomePageComponent} from "../view/pages/home-page/home-page.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexModule} from "@angular/flex-layout";



export const tisComponents = [MainPageComponent, HomePageComponent]
export const tisAngularMaterialModules = [MatInputModule, MatButtonModule, MatIconModule]

@NgModule({
  declarations: [...tisComponents],
  imports: [BrowserModule,
    RouterModule.forRoot(ApplicationRoutes),
    BrowserAnimationsModule,
    ...tisAngularMaterialModules, FlexModule],
  providers: [],
  bootstrap: [MainPageComponent],
})
export class AppModule {}
