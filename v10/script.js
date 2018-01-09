/*
Version 10
Requirements:
1. There should be a way to create delete buttons.
2. There should be a delete button for each todo.
3. Each <li> should have an id that has the todo position.
4. Delete buttons should have access to the todo id.
5. Clicking delete shoud update todoList.todos and the DOM.
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
    // var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(position);
    // deleteTodoPositionInput.value = null;
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
    if (todoList.todos.length === 0){
    } else {

      for (var i=0;i<todoList.todos.length;i++){
        var todoLi = document.createElement('li');
        var todoTextWithCompletion = '';
        var todo = todoList.todos[i];
        if (todo.completed === true){
          todoTextWithCompletion = '(x) ' + todo.todoText;
        } else {
          todoTextWithCompletion = '( ) ' + todo.todoText;
        }
        todoLi.textContent = todoTextWithCompletion;
        // 2. There should be a delete button for each todo.
        todoLi.appendChild(this.createDeleteButton());
        // 3. Each <li> should have an id that has the todo position.
        todoLi.id = i;
        todosUl.appendChild(todoLi);
      }
    }
  },

  // 1. There should be a way to create delete buttons.
  createDeleteButton: function(){
    var todoDeleteButton = document.createElement('button');
    todoDeleteButton.textContent = 'Delete';
    todoDeleteButton.className = 'deleteButton';
    return todoDeleteButton;
  },

  setUpEventListeners: function(){
    // 4. Delete buttons should have access to the todo id.
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event){
      var elementClicked = event.target;
      if (elementClicked.className === 'deleteButton'){
        // 5. Clicking delete shoud update todoList.todos and the DOM.
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();
