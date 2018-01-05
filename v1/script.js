/*
Version 1
Requirements:
1. It should have a place to store todos.
2. It should have a way to display todos.
3. It should have a way to add new todos.
4. It should have a way to change a todo.
5. It should have a way to delete a todo.
*/

/* 1. It should have a place to store todos. */
var todos = ['item 1'];

/* 2. It should have a way to display todos. */
console.log('My Todos:', todos);

/* 3. It should have a way to add new todos. */
todos.push('new todo');

/* 4. It should have a way to change a todo. */
todos[1] = 'new Todo';

/* 5. It should have a way to delete a todo. */
todos.splice(0, 1);
