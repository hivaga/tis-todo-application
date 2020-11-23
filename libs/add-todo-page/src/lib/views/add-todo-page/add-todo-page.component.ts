import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TasksServiceService} from "../../services/tasks-service.service";
import {Subject, Subscription} from "rxjs";
import {Item} from "../../../../../components/src/lib/items-list/items-list.component";

@Component({
  selector: 'tis-workspace-add-todo-page',
  templateUrl: './add-todo-page.component.html',
  styleUrls: ['./add-todo-page.component.scss']
})
export class AddTodoPageComponent implements OnInit, OnDestroy {

  readonly tasks:Subject<Item[]> = new Subject<Item[]>();

  private tasksSubscription:Subscription;

  constructor(private tasksService:TasksServiceService) { }

  ngOnInit(): void {
    this.tasksSubscription = this.tasksService.onUpdate.subscribe(this.onUpdateTasksHandler.bind(this))
  }

  ngOnDestroy(): void {
    this.tasksSubscription.unsubscribe();
  }

  onNewItemAddedHandler(item:string){
    console.log('New Item:',item);
    this.tasksService.addTask(item);
  }

  private onUpdateTasksHandler(value:string[]){
    console.log('Tasks list:', value);
    const result = value.map((item, index) =>{
      return {name:item, position: index}
    });
    this.tasks.next(result);
  }
}
