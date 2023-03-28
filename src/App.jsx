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

  return (
      /* Fragment creation */
      <>
        <h1>Todo List</h1>
        <AddTodoForm onAddTodo={handleAddTodo}/>
        <p>{newTodo}</p>
        <TodoList todoList={todoList}/>
      </>
    );
};

export default App;
