import React, { useState } from 'react';
// Components
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
        <header>
          <AddTodoForm onAddTodo={handleAddTodo}/>
        </header>
        <main>
          <TodoList todoList={todoList}/>
        </main>
      </>
    );
};

export default App;

