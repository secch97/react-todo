import React, { useState } from 'react';

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

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
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
    <form onSubmit={handleFormSubmit}>
        <label htmlFor="todoTitle">Title: </label>
        <input 
          id="todoTitle" 
          type="text" 
          value={todoTitle} 
          onChange={handleTitleChange}
          name="title"
        />
        <button type="submit">Add</button>
    </form>
  );
};

export {
    AddTodoForm as default
};
