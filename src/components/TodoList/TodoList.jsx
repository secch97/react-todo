import React, { useState } from 'react';
// Components
import TodoListItem from '../TodoListItem/TodoListItem';
// CSS
import styles from "./TodoList.module.css"
// Third party libraries:
import PropTypes from 'prop-types';

const TodoList = ({todoList, onRemoveTodo}) => {
  /*
    ==================================
    =             HOOKS              =
    ==================================
  */
  //D: Store as a state the IDs we want to remove.
  const [removedIds, setRemovedIds] = useState([]);
  const [disable, setDisable] = useState(false);

  /*
    ==================================
    =            HANDLERS            =
    ==================================
  */
 //E: Once this function is called, we want to add the id that need to be removed to the removedIds state to trigger a re render of the list.
  const handleRemoveTodoAnimation = (id) => {
    setRemovedIds((prevIds) => [...prevIds, id]);
  };

  const handleRemoveTodo = (id) => {
    onRemoveTodo(id);
  };

  const handleDisableButtons = (status) => {
    setDisable(status);
  };

  return (
    <div className={styles.todoListContainer}>
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
                  isRemoved={removedIds.includes(toDo.id)}
                  onRemoveTodoAnimation={handleRemoveTodoAnimation}
                  onRemoveTodo={handleRemoveTodo}
                  isDisable = {disable}
                  onDisable = {handleDisableButtons}
                />
            );
          })
        }
      </ul>
    </div>
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
  todoList: PropTypes.array.isRequired
}
