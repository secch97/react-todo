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
  const [isLoading, setIsLoading] = useState(true);

  /* Insert todoList to app from localStorage*/
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem("savedTodoList")) ?? []
          }
        })
      }, 2000);
    }).then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
  }, []);

  /* Insert todoList from app to localStorage*/
  useEffect(()=>{
    if(!isLoading){
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
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
          <NavigationBar onAddTodo={handleAddTodo} isLoading={isLoading}/>
        </header>
        <main>
          {
            isLoading ? 
            (
              <div className='loading-screen-container'>
                <FontAwesomeIcon icon={["fas", "spinner"]} size="5x" spin className='loading-screen'/>
              </div>
            ) 
            : 
            (<TodoList todoList={todoList} onRemoveTodo={handleRemoveTodo}/>)
          }
          
        </main>
        <Footer/>
        <a className='button-top' onClick={scrollToTop}>
          <FontAwesomeIcon icon={["fas", "circle-up"]} size="2x"/>
        </a>
      </>
    );
};

export default App;

