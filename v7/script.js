/*
Version 7
Requirements:
1. There should be a "Display todos" button and a "Toggle all" button in the app.
2. Clicking "Display todos" should run todoList.displayTodos.
3. Clicking "Toggle all" should run todoList.toggleAll.
*/

var todoList = {
  todos: [],

  displayTodos: function(){
    if (this.todos.length < 1){
      console.log('There are no todos');
    } else {
      for (var i=0;i<this.todos.length;i++){
        // 3. .displayTodos should show .completed
        if (this.todos[i].completed === false){
          console.log('( )', this.todos[i].todoText);
        } else {
          console.log('(x)', this.todos[i].todoText);
        }
      }
    }
  },

  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  editTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  },

  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },

  toggleAll: function(){
    var totalTodos = this.todos.length;
    var numCompleted = 0;

    // Get the number of completed todos.
    for (var i=0;i<totalTodos;i++){
      if (this.todos[i].completed === true){
        numCompleted++;
      }
    }

    // Case 1: if all are true, make all false
    if (numCompleted === totalTodos){
      for (var i=0;i<totalTodos;i++){
        this.todos[i].completed = false;
      }

    // Case 2: else, make all true
    } else {
      for (var i=0;i<totalTodos;i++){
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }

};

// 1. We want to get access to the display todos button.
var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');
// 2. We want to run displayTodos method when someone clicks the display todos button.
displayTodosButton.addEventListener('click', function(){
  todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function(){
  todoList.toggleAll();
});
