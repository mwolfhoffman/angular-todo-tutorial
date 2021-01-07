import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from 'src/classes/todo.class';

@Injectable()
export class TodoService {

    private todosSource = new BehaviorSubject([
        new Todo(1, "Create an angular service", false),
        new Todo(2, "Enjoy rxjs", false),
    ]);
    todos = this.todosSource.asObservable();

    constructor() { }

    addTodo(newTodo: Todo) {
        let currentTodos = this.todosSource.getValue();
        currentTodos.push(newTodo)
        this.todosSource.next(currentTodos)
    }

    editTodo(updatedTodo: Todo) {
        let todos = this.todosSource.getValue()
        let todo = todos.find(t => { return t.id === updatedTodo.id });
        todo = updatedTodo
        this.todosSource.next(todos);
    }

    deleteTodo(updatedTodo: Todo) {
        let todos = this.todosSource.getValue()
        let index = todos.findIndex(t => { return t.id === updatedTodo.id });
        todos.splice(index, 1);
        this.todosSource.next(todos);
    }


}