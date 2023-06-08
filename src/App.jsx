import React, { Fragment, useEffect, useState } from 'react';
// Components
import TodoList from './components/TodoList/TodoList';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
// Helpers
import { scrollToTop } from './helpers/scrollToTop';
// Third party libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditTodoForm from './components/EditTodoForm/EditTodoForm';

const App = () => {
  console.log("ACTIVE ELEMENT", document.activeElement)
  /*
    ============================
    =           HOOKS          =
    ============================
  */
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalData, setModalData] = useState({
    modalStatus: false, 
    todo: {}
  });

  /*
    ============================
    =     ASYNC FUNCTIONS      =
    ============================
  */
  const fetchData = async () => {
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}?sort%5B0%5D%5Bfield%5D=createdAt&sort%5B0%5D%5Bdirection%5D=asc`;
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
  };

  const postData = async({title, createdAt}) => {
    const airtableData = {
      fields: {
        title: title,
        createdAt: createdAt
      }
    };
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}\\`;
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(airtableData)
    };
    
    try{
      const response = await fetch(url, options);
      if(!response.ok){
        throw new Error(`${response.status}`);
      }
      const data = await response.json();
      const newTodo = {
        title: data.fields.title,
        id: data.id
      }
      return newTodo;
    } catch(error){
      console.log(`Error: ${error}`);
    }
  };

  const updateData = async({id, title}) =>{
    const airtableData = {
      fields: {
        title: title,
      }
    };
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/${id}\\`;
    const options = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(airtableData)
    };
    try{
      const response = await fetch(url, options);
      if(!response.ok){
        throw new Error(`${response.status}`);
      }
      const data = await response.json();
      const updatedTodo = {
        title: data.fields.title,
        id: data.id
      }
      return updatedTodo;
    } catch(error){
      console.log(`Error: ${error}`);
    }
  };

  const deleteData = async(id) => {
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/${id}\\`;
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
      }
    };
    try{
      const response = await fetch(url, options);
      if(!response.ok){
        throw new Error(`${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch(error){
      console.log(`Error: ${error}`);
    }
  };

  /* Insert todoList to airtable database*/
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
  const handleAddTodo = async (todo) => {
    const newTodo = await postData(todo);
    if (typeof newTodo === "object"){
      setTodoList((todoList) => [...todoList, newTodo]);
    }
  };

  const handleEditTodoModal = (modalData) => {
    setModalData({modalStatus: modalData.modalStatus, todo:modalData.todo});
  }

  const handleEditTodo = async (todo) => {
    const updatedTodo = await updateData(todo);
    if (typeof updatedTodo === "object"){
      setTodoList(todoList.map((todo) => {
        if (todo.id === updatedTodo.id){
          return ({id: todo.id, title: updatedTodo.title});
        }
        else{
          return todo;
        }
      }))
    }
    setModalData({
      modalStatus: false,
      todo: todo
    });
  };

  const handleRemoveTodo = async (id) => {
    const deletedTodo = await deleteData(id);
    if(deletedTodo.deleted){
      const newTodoList = todoList.filter((toDo) => toDo.id !== id);
      setTodoList(newTodoList);
    }
    else{
      return;
    }
  }

  return (
      /* Fragment creation */
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            exact
            element={(
              <>
                <header>
                  <NavigationBar onAddTodo={handleAddTodo} isLoading={isLoading} inputIsFocused={!modalData.modalStatus}/>
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
                    (
                      <>
                        <TodoList todoList={todoList} onRemoveTodo={handleRemoveTodo} onEditTodoModal={handleEditTodoModal}/>
                        <EditTodoForm modalData={modalData} onEditTodoModal={handleEditTodoModal} onEditTodo={handleEditTodo}/>
                      </>
                    )
                  }
                  
                </main>
                <Footer/>
                <a className='button-top' onClick={scrollToTop}>
                  <FontAwesomeIcon icon={["fas", "circle-up"]} size="2x"/>
                </a>
              </>
            )}
          > 
          </Route>
          <Route
            path="/new"
            element={(<h1>New Todo List</h1>)}
          >
          </Route>
        </Routes>
      </BrowserRouter>
    );
};

export default App;

