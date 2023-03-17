import React from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

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
