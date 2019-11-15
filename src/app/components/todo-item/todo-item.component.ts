import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  onToggle(todo: Todo): void {
    todo.completed = !todo.completed;
    this.todoService.toggleCompleted(todo).subscribe();
  }

  onDelete(todo: Todo): void {
    this.deleteTodo.emit(todo);
  }

  setClasses() {
    return {
      todo: true,
      'is-completed': this.todo.completed
    };
  }
}
