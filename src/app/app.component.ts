import { Component } from '@angular/core';
import { Todo } from '../classes/todo.class';
import { TodoService } from './services/todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todo-app';
  newTodo: Todo = new Todo(1, "", false);
  todos: Todo[];
  subscription: Subscription;

  constructor(
    private todoService: TodoService
  ) { }


  ngOnInit(): void {
    this.subscription = this.todoService.todos.subscribe(allTodos => {
      console.log(allTodos)
      this.todos = allTodos
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.newTodo.id = this.todos.length + 1 // Ideally we should have a unique ID using a npm module like uuid
    this.todoService.addTodo(this.newTodo)
    this.newTodo = new Todo(0, "", false);
  }

  toggleComplete(item) {
    item.completed = !item.completed;
    console.log(this.todos)
  }
}
