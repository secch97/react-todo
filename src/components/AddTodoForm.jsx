import React, { useState } from 'react';
// Third party libraries:
import PropTypes from 'prop-types';
import InputWithLabel from "./InputWithLabel"

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
    <form onSubmit={handleFormSubmit}>
      <InputWithLabel
        labelText="Title:"
        inputId="todoTitle"
        inputType="text"
        inputPlaceholder="Add a task"
        inputValue={todoTitle}
        inputName = "title"
        inputOnChange={handleTitleChange}
      />
      <button type="submit">Add</button>
    </form>
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
