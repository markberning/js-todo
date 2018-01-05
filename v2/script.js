/*
Version 2
Requirements:
1. It should have a function for:
display todos,
add todos,
change todos,
and delete todos
*/

var todos = ['item 1'];

/* 1a. It should have a function to display todos. */
function displayTodos(){
  console.log('My Todos:', todos);
}

/* 1b. It should have a function to add new todos. */
function addTodo(todo){
  todos.push(todo);
  displayTodos();
}

/* 1c. It should have afunction to change a todo. */
function editTodo(position, todo){
  todos[position] = todo;
  displayTodos();
}

/* 1d. It should have a function to delete a todo. */
function deleteTodo(position){
  todos.splice(position, 1);
  displayTodos();
}
