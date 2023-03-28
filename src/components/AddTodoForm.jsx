import React, { useState } from 'react';
// Third party libraries:
import PropTypes from 'prop-types';

const AddTodoForm = ({onAddTodo}) => {
  /*
    ============================
    =          STATES          =
    ============================
  */
  const [todoTitle, setTodoTitle] = useState("");

  /*
    ============================
    =         HANDLERS         =
    ============================
  */
  const handleTitleChange = ({target}) => {
    const newTodoTitle = target.value;
    setTodoTitle(newTodoTitle);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    /*
      Validation:
        - If todoTitle submitted is blank, then do not change the state.
        Else, change the state.
    */
    if(!todoTitle.trim()){
      return;
    }
    onAddTodo({
      title: todoTitle.trim(),
      id: Date.now()
    });
    setTodoTitle("");
  };

  return (
    <div className='nav-bar-container'>
      <nav className="nav-bar">
        <div className='nav-bar-logo-container'>
          <a className='nav-bar-logo-link' href="/">
            <img className="nav-bar-logo" src='../../images/to-do-logo.png'/>
          </a>
        </div>
        <div className='nav-bar-user-controls-container'>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="todoTitle">Title: </label>
            <input 
              id="todoTitle" 
              type="text" 
              placeholder='Add a task'
              value={todoTitle} 
              onChange={handleTitleChange}
              name="title"
            />
            <button type="submit">Add</button>
          </form>
        </div>
        
      </nav>
    </div>
    
  );
};

export {
    AddTodoForm as default
};

/*
  ============================
  =        PROP TYPES        =
  ============================
*/
AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired
};
