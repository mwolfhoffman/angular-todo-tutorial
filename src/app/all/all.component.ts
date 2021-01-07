import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/classes/todo.class';
import { Subscription } from 'rxjs';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  todos: Todo[];
  subscription: Subscription

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.subscription = this.todoService.todos.subscribe(allTodos => {
      this.todos = allTodos
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleComplete(item){
    item.completed = !item.completed;
    this.todoService.editTodo(item);
  }

}
