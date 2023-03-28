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
  const [todoList, setTodoList] = useState([]);


  /*
    ============================
    =         HANDLERS         =
    ============================
  */
  const handleAddTodo = (todoTitle) =>{
    setNewTodo(todoTitle);
  };

  const addTodo = (newTodo) => {
    setTodoList((todoList) => [newTodo, ...todoList]);
  };

  return (
      /* Fragment creation */
      <>
        <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo}/>
        <TodoList todoList={todoList}/>
      </>
    );
};

export default App;
