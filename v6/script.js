/*
Version 6
Requirements:
1. Create a toggleAll function: If everything is true, make everything false.
2. If some or none are true, make everything true.
*/

var todoList = {
  todos: [],

  displayTodos: function(){
    // 2. ,displayTodos should tell you if .todos is empty
    if (this.todos.length < 1){
      console.log('There are no todos');
    // 1. .displayTodos should show .todoText
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
