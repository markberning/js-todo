/*
Version 8
Requirements:
1. It should have working controls for .addTodo
2. It should have working controls for .editTodo
3. It should have working controls for .deleteTodo
4. It should have working controls for .toggleCompleted
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

var handlers = {
  displayTodos: function(){
    todoList.displayTodos();
  },
  toggleAll: function(){
    todoList.toggleAll();
  },
  addTodo: function(){
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
  },
  editTodo: function(){
    var editTodoPositionInput = document.getElementById('editTodoPositionInput');
    var editTodoTextInput = document.getElementById('editTodoTextInput');
    todoList.editTodo(editTodoPositionInput.valueAsNumber, editTodoTextInput.value);
    editTodoPositionInput.value = '';
    editTodoTextInput.value = '';
  },
  deleteTodo: function(){
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = null;
  },
  toggleCompleted: function(){
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = null;
  }
};
