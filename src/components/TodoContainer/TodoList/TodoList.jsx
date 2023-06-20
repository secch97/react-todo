import React, { useState } from 'react';
// Components
import TodoListItem from '../TodoListItem/TodoListItem';
// CSS
import styles from "./TodoList.module.css"
// Third party libraries:
import PropTypes from 'prop-types';

const TodoList = ({todoList, listFetched, onRemoveTodo, onEditTodoModal}) => {
  /*
    ==================================
    =            HANDLERS            =
    ==================================
  */

  const handleRemoveTodo = (id) => {
    onRemoveTodo(id);
  };


  return (
      <ul className={styles.todoList}>
        {
          todoList.map((toDo) => {
            return (
                /* F: Once the list is re rendered: if there is a listItem id that matched an id that 
                needs to be removed, send the attribute isRemoved as true to the listItem
                */
                <TodoListItem 
                  key={toDo.id} 
                  {...toDo}
                  onRemoveTodo={handleRemoveTodo}
                  onEditTodoModal={onEditTodoModal}
                  isDisable = {listFetched}
                />
            );
          })
        }
      </ul>
  );
};

export {
    TodoList as default
};

/*
  ===========================
  =       PROP-TYPES        =
  ===========================
*/
TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  listFetched: PropTypes.bool.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onEditTodoModal: PropTypes.func.isRequired
};
