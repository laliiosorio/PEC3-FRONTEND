/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
class TodoController {
  private service: TodoService;
  private view: TodoView;

  constructor(service: TodoService, view: TodoView) {
    this.service = service;
    this.view = view;

    // Explicit this binding
    this.service.bindTodoListChanged(this.onTodoListChanged.bind(this));
    this.view.bindAddTodo(this.handleAddTodo.bind(this));
    this.view.bindEditTodo(this.handleEditTodo.bind(this));
    this.view.bindDeleteTodo(this.handleDeleteTodo.bind(this));
    this.view.bindToggleTodo(this.handleToggleTodo.bind(this));

    // Display initial todos
    this.onTodoListChanged(this.service.todos);
  }

  private onTodoListChanged = (todos: Todo[]) => {
    this.view.displayTodos(todos);
  };

  private handleAddTodo = (todoText: string) => {
    this.service.addTodo(todoText);
  };

  private handleEditTodo = (id: string, todoText: string) => {
    this.service.editTodo(id, todoText);
  };

  private handleDeleteTodo = (id: string) => {
    this.service.deleteTodo(id);
  };

  private handleToggleTodo = (id: string) => {
    this.service.toggleTodo(id);
  };
}
