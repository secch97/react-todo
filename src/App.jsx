import React, { useState } from 'react';
// Components
import TodoList from './components/TodoList';
import NavigationBar from './components/NavigationBar';

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
          <NavigationBar onAddTodo={handleAddTodo}/>
        </header>
        <main>
          <TodoList todoList={todoList}/>
        </main>
      </>
    );
};

export default App;

