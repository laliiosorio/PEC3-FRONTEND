/**
 * @class Service
 *
 * Manages the data of the application.
 */
class TodoService {
  todos: Todo[];

  constructor() {
    const storedTodos = localStorage.getItem("todos");
    this.todos = storedTodos ? JSON.parse(storedTodos) : [];
    this.todos = this.todos.map((todo) => new Todo(todo));
  }

  onTodoListChanged: Function;

  bindTodoListChanged(callback: Function) {
    this.onTodoListChanged = callback;
  }

  _commit(todos: Todo[]) {
    this.onTodoListChanged(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodo(text: string) {
    this.todos.push(new Todo({ text }));

    this._commit(this.todos);
  }

  editTodo(id: string, updatedText: string) {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? new Todo({
            ...todo,
            text: updatedText
          })
        : todo
    );

    this._commit(this.todos);
  }

  deleteTodo(id: string) {
    this.todos = this.todos.filter(({ id: todoId }) => todoId !== id);

    this._commit(this.todos);
  }

  toggleTodo(id: string) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? new Todo({ ...todo, complete: !todo.complete }) : todo
    );

    this._commit(this.todos);
  }
}

