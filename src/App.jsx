import React, { useEffect, useState } from 'react';
// Components
import TodoList from './components/TodoList';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
// Helpers
import { scrollToTop } from './helpers/scrollToTop';
// Third party libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App = () => {
  /*
    ============================
    =           HOOKS          =
    ============================
  */
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const todoListFetch = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem("savedTodoList")) ?? []
          }
        })
      }, 2000);
    });

    todoListFetch.then((result) => setTodoList(result.data.todoList))
  }, []);

  /* Insert todoList into app from localStorage*/
  useEffect(()=>{
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

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

