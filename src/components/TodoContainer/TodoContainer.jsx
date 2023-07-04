import React, { useEffect, useState } from "react";
//Third party libraries:
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Components:
import NavigationBar from "../NavigationBar/NavigationBar"
import AddTodoForm from "../AddTodoForm/AddTodoForm"
import EditTodoForm from "../EditTodoForm/EditTodoForm"
import TodoList from "./TodoList/TodoList"
//CSS:
import styles from "./TodoContainer.module.css";

const TodoContainer = ({tableName}) => {
  /*
    ============================
    =           HOOKS          =
    ============================
  */
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [listFetched, setListFetched] = useState(false);
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
        const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}/?sort[0][field]=createdAt&sort[0][direction]=asc`;
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
              createdAt: todo.fields.createdAt,
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
            createdAt: data.fields.createdAt,
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
            createdAt: data.fields.createdAt,
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
    
  /*
    ============================
    =          EFFECTS         =
    ============================
  */      
  useEffect(() => {
    fetchData();
  }, [tableName]);

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
          return ({id: todo.id, title: updatedTodo.title, createdAt: todo.createdAt});
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
    setListFetched(true);
    const deletedTodo = await deleteData(id);
    if(deletedTodo.deleted){
      const newTodoList = todoList.filter((toDo) => toDo.id !== id);
      setTodoList(newTodoList);
      setListFetched(false);
    }
    else{
      return;
    }
  };

  return(
    <>
      <header>
        <NavigationBar>
          <AddTodoForm onAddTodo={handleAddTodo} isLoading={isLoading} inputIsFocused={!modalData.modalStatus}/>
        </NavigationBar>
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
              <div className={styles.todoListContainer}>
                <h1>{tableName} table</h1>
                <TodoList todoList={todoList} listFetched={listFetched} onRemoveTodo={handleRemoveTodo} onEditTodoModal={handleEditTodoModal}/>
                <EditTodoForm modalData={modalData} onEditTodoModal={handleEditTodoModal} onEditTodo={handleEditTodo}/>
              </div>
            )
          }
      </main>
    </>
  );
};

TodoContainer.propTypes = {
    tableName: PropTypes.string.isRequired
};

export {
    TodoContainer as default
};
