import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

const App = () => {
  /*
    ============================
    =          STATES          =
    ============================
  */
  const [todoList, setTodoList] = useState([]);

  /*
    ============================
    =         HANDLERS         =
    ============================
  */
  const handleAddTodo = (newTodo) => {
    setTodoList((todoList) => [...todoList, newTodo]);
  };

  return (
      /* Fragment creation */
      <>
        <h1>Todo List</h1>
        <AddTodoForm onAddTodo={handleAddTodo}/>
        <TodoList todoList={todoList}/>
      </>
    );
};

export default App;
