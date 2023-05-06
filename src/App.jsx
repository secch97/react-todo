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

  /* Async function */
  const fetchData = async () => {
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}\\`;
    const options = {
      method:"GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
      }
    };
    try{
      const response = await fetch(url, options);
      if (!response.ok){
        throw new Error(`${response.status}`);
      }
      const data = await response.json();
      const todos = data.records.map((todo) => {
        return {
          title: todo.fields.title,
          id:todo.id
        };
      });
      setTodoList(todos);
      setIsLoading(false);
    }catch(error){
      console.log(`Error fetching data: ${error}`)
    }

  }

  /* Insert todoList to app from localStorage*/
  useEffect(() => {
    fetchData();
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

