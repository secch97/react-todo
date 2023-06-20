import React, { useState } from 'react';
// Third party libraries:
import PropTypes from 'prop-types';
import InputWithLabel from "../InputWithLabel/InputWithLabel"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//CSS
import styles from "./AddTodoForm.module.css"


const AddTodoForm = ({onAddTodo, isLoading, inputIsFocused}) => {
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
      createdAt: Date.now()
    });
    setTodoTitle("");
  };

  return (
    <form className={styles.todoForm} onSubmit={handleFormSubmit}>
      <InputWithLabel
        inputId="todoTitle"
        inputType="text"
        inputPlaceholder="Add a task"
        inputValue={todoTitle}
        inputName = "title"
        inputOnChange={handleTitleChange}
        isLoading={isLoading}
        isFocused={inputIsFocused}
      >
        <FontAwesomeIcon 
          icon={["fas", "calendar-plus"]} 
          size="xl" 
        />
        <span>Title: </span>
      </InputWithLabel>
      <button type="submit" disabled={isLoading}>Add</button>
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
