import React from 'react';

const AddTodoForm = ({onAddTodo}) => {
  /*
    ============================
    =         HANDLERS         =
    ============================
  */

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const todoTitle = event.target.title.value.trim();
    /*
      Validation:
        - If todoTitle submitted is blank, then do not change the state.
        Else, change the state.
    */
    if(!todoTitle){
      return;
    }
    console.log(todoTitle);
    onAddTodo(todoTitle);
    event.target.reset();
  };

  return (
    <form onSubmit={handleFormSubmit}>
        <label htmlFor="todoTitle">Title: </label>
        <input id="todoTitle" type="text" name="title"/>
        <button type="submit">Add</button>
    </form>
  );
};

export {
    AddTodoForm as default
};
