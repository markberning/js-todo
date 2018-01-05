/*
Version 3
Requirements:
1. It should store the todos array and all of the functions in an object.
*/
var todoList = {
  todos: ['item 1'],

  displayTodos: function(){
    console.log('My Todos:', this.todos);
  },

  addTodo: function(todo){
    this.todos.push(todo);
    this.displayTodos();
  },

  editTodo: function(position, todo){
    this.todos[position] = todo;
    this.displayTodos();
  },

  deleteTodo: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
