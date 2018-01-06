/*
Version 4
Requirements:
1. The todoList.addTodo method shoud add 'objects' instead of adding 'text'.
1a. The todo array should change from an array of text to an array of objects.
1b. Each object in the array will have 2 properies: 1. todoText 2. todoCompleted boolean.
2. The todoList.editTodo method should edit the new todos.todoText property.
3. Add a todoList.toggelCompleted method to allow toggling of the todos.completed property of each todo in app.
*/

var todoList = {
  // 1a. The todo array should change from an array of text to an array of objects.
  todos: [],

  displayTodos: function(){
    console.log('My Todos:', this.todos);
  },

  // 1. The todoList.addTodo method shoud add 'objects' instead of adding 'text'.
  // 1b. Each object in the array will have 2 properies: 1. todoText 2. todoCompleted boolean.
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  //2. The todoList.editTodo method should edit the new todos.todoText property.
  editTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  // 3. Add a todoList.toggelCompleted method to allow toggling of the todos.completed property of each todo in app.
  toggelCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },

  deleteTodo: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
