/*
Version 11
Requirements:
1. todoList.toggleAll should use a forEach
2. view.displayTodos should use a forEach
*/

var todoList = {
  todos: [],

  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },

  editTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
  },

  deleteTodo: function(position){
    this.todos.splice(position, 1);
  },

  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },

  toggleAll: function(){
    var totalTodos = this.todos.length;
    var numCompleted = 0;
    this.todos.forEach(function(todo){
      if (todo.completed === true){
        numCompleted++;
      }
    });

    // Case 1: if all are true, make all false
    if (numCompleted === totalTodos){
      this.todos.forEach(function(todo){
        todo.completed = false;
      });

    // Case 2: else, make all true
    } else {
      this.todos.forEach(function(todo){
        todo.completed = true;
      });
    }
  }

};

var handlers = {
  toggleAll: function(){
    todoList.toggleAll();
    view.displayTodos();
  },
  addTodo: function(){
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  editTodo: function(){
    var editTodoPositionInput = document.getElementById('editTodoPositionInput');
    var editTodoTextInput = document.getElementById('editTodoTextInput');
    todoList.editTodo(editTodoPositionInput.valueAsNumber, editTodoTextInput.value);
    editTodoPositionInput.value = '';
    editTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(position){
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function(){
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = null;
    view.displayTodos();
  }
};

var view = {
  displayTodos: function(){
    var todosUl = document.getElementById('todoListUl');
    todosUl.innerHTML = '';
    todoList.todos.forEach(function(todo, position){
      var todoLi = document.createElement('li');
      var todoTextWithCompletion = '';
      if (todo.completed === true){
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todoLi.id = position;
      todosUl.appendChild(todoLi);
    }, this);
  },

  createDeleteButton: function(){
    var todoDeleteButton = document.createElement('button');
    todoDeleteButton.textContent = 'Delete';
    todoDeleteButton.className = 'deleteButton';
    return todoDeleteButton;
  },

  setUpEventListeners: function(){
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event){
      var elementClicked = event.target;
      if (elementClicked.className === 'deleteButton'){
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();
