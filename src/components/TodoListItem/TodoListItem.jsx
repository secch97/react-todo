import React, { useEffect, useState } from 'react';
// CSS Modules
import styles from "./TodoListItem.module.css";
// Third party libraries:
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TodoListItem = ({id, title, isRemoved, onRemoveTodoAnimation, onRemoveTodo, onEditTodoModal, isDisable, onDisable}) => {
  console.log()
  /*
    ==================================
    =             HOOKS              =
    ==================================
  */
  /* States */
  //A: Set animation to false
  const [isAnimating, setIsAnimating] = useState(false);

  /* Effects */
  /*G: isRemoved has changed! This will trigger a side effect: we continue the 
  animation and set the ref classname of the current <li> to the fadeOut class
  and we call the onRemoveTodo handler to remove from the toDoList state the current 
  list item
  */
  useEffect(()=>{
    if(isRemoved){
      onRemoveTodo(id);
    }
  }, [isRemoved]);

  /*
    ==================================
    =            HANDLERS            =
    ==================================
  */
  const handleRemoveTodo = () => {
    //C: Set animation status to true to re render listItem. After 0.5s, call onRemoveTodoAnimation passing the id of the <li> we want to animate
    setIsAnimating(true);
    onDisable(true);
    setTimeout(() => {
      onRemoveTodoAnimation(id);
      setTimeout(() => {
        onDisable(false);
      }, 400)
    }, 200);
  }

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  const handleEditTodoModal = () => {
    document.activeElement.blur();
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
      onAnimationEnd={handleAnimationEnd}
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
  isRemoved: PropTypes.bool.isRequired,
  onRemoveTodoAnimation: PropTypes.func.isRequired,
  onRemoveTodo: PropTypes.func.isRequired
};
