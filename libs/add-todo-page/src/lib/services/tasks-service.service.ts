import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TasksServiceService {

  readonly onUpdate:Subject<string[]> = new Subject<string[]>()

  private _tasks:string[] = [];

  constructor() { }

  addTask(title:string){
    this._tasks.push(title);
    this.onUpdate.next(this.tasks);
  }

  get tasks():string[]{
    return this._tasks;
  }


}
