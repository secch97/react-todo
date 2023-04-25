import React, { useEffect, useState } from 'react';
// Components
import TodoList from './components/TodoList';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
// Helpers
import { scrollToTop } from './helpers/scrollToTop';
// Third party libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("savedTodoList")) ?? []);

  useEffect(()=>{
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};


const App = () => {
  /*
    ============================
    =           HOOKS          =
    ============================
  */
  const [todoList, setTodoList] = useSemiPersistentState();

  /*
    ============================
    =         HANDLERS         =
    ============================
  */
  const handleAddTodo = (newTodo) => {
    setTodoList((todoList) => [...todoList, newTodo]);
  };

  const handleRemoveTodo = (id) => {
    const newTodoList = todoList.filter((toDo) => toDo.id !== id);
    setTodoList(newTodoList);
  }

  return (
      /* Fragment creation */
      <>
        <header>
          <NavigationBar onAddTodo={handleAddTodo}/>
        </header>
        <main>
          <TodoList todoList={todoList} onRemoveTodo={handleRemoveTodo}/>
        </main>
        <Footer/>
        <a className='button-top' onClick={scrollToTop}>
          <FontAwesomeIcon icon={["fas", "circle-up"]} size="2x"/>
        </a>
      </>
    );
};

export default App;

