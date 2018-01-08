/*
Version 5
Requirements:
1. .displayTodos should show .todoText
2. ,displayTodos should tell you if .todos is empty
3. .displayTodos should show .completed
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

  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },

  deleteTodo: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
