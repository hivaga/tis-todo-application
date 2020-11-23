import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import {tisAngularMaterialModules} from "../../../module/app.module";
import {FlexModule} from "@angular/flex-layout";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {APP_BASE_HREF} from "@angular/common";

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageComponent ],
      imports: [BrowserModule,
        BrowserAnimationsModule,
        ...tisAngularMaterialModules, FlexModule, RouterModule.forRoot([])],
      providers: [{ provide: APP_BASE_HREF, useValue : '/' }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });
});
