/*
Version 2
Requirements:
1. It should have a function for:
display todos,
add todos,
change todos,
and delete todos
*/

/* 1. It should have a place to store todos. */
var todos = ['item 1'];

/* 2. It should have a way to display todos. */
function displayTodos(){
  console.log('My Todos:', todos);
}

/* 3. It should have a way to add new todos. */
function addTodo(todo){
  todos.push(todo);
  displayTodos();
}

/* 4. It should have a way to change a todo. */
function editTodo(position, todo){
  todos[position] = todo;
  displayTodos();
}

/* 5. It should have a way to delete a todo. */
function deleteTodo(position){
  todos.splice(position, 1);
  displayTodos();
}
