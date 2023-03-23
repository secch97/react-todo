import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

const App = () => {
/*
  ============================
  =          STATES          =
  ============================
*/
 const [newTodo, setNewTodo] = useState("");

  return (
    /* Fragment creation */
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo}/>
      <p>{newTodo}</p>
      <TodoList/>
    </>
  );
};

export default App;
