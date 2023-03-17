import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App = () => {
  return (
    /* Fragment creation */
    <>
      <h1>Todo List</h1>
      <AddTodoForm/>
      <TodoList/>
    </>
  );
};

export default App;
