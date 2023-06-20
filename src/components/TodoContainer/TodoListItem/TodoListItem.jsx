import React, { useEffect, useRef, useState } from 'react';
// CSS Modules
import styles from "./TodoListItem.module.css";
// Third party libraries:
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TodoListItem = ({id, title, onRemoveTodo, onEditTodoModal, isDisable}) => {
  /*
    ==================================
    =             HOOKS              =
    ==================================
  */
  /* States */
  //A: Set animation to false
  const [isAnimating, setIsAnimating] = useState(false);
  
  /*
    ==================================
    =            HANDLERS            =
    ==================================
  */
  const handleRemoveTodo = () => {
    setIsAnimating(true);
    onRemoveTodo(id);
  }



  const handleEditTodoModal = () => {
    onEditTodoModal({
      modalStatus: true,
      todo: {
        id: id,
        title: title
      }
    });
  }

  return (
    <li 
      className={isAnimating ? `${styles.listItem} animate__animated animate__backOutRight animate__faster` : `${styles.listItem} animate__animated animate__fadeIn animate__faster`}
    >
      <span>{title}</span>
      {/*B: Add onClick event to trigger handleRemoveTodo*/}
      <div
        className={styles.todoItemControlsContainer}
      >
        <div
          className={styles.todoItemControls}
        >
          <button 
            className={styles.removeButtonIcon}
            onClick={handleRemoveTodo}
            disabled={isDisable}
          >
            <FontAwesomeIcon icon={["fas", "trash-can"]} size="sm"/>
          </button>
          <button
            className={styles.editButtonIcon}
            onClick={handleEditTodoModal}
            disabled={isDisable}
            type='button'
          >
            <FontAwesomeIcon icon={["fas", "pen-to-square"]} size="sm"/>
          </button>
        </div>  
      </div>
      
    </li>
  );
};

export {
    TodoListItem as default
};

/*
  ===========================
  =       PROP-TYPES        =
  ===========================
*/
TodoListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onEditTodoModal: PropTypes.func.isRequired,
  isDisable: PropTypes.bool.isRequired
};
