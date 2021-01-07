import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/classes/todo.class';
import { Subscription } from 'rxjs';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {


  todos: Todo[];
  subscription: Subscription

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.subscription = this.todoService.todos.subscribe(allTodos => {
      this.todos = allTodos.filter(t=>t.completed)
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
