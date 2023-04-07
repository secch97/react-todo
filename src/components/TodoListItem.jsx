import React, { useEffect, useRef, useState } from 'react';
// Third party libraries:
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TodoListItem = ({id, title, isRemoved, onRemoveTodoAnimation, onRemoveTodo}) => {

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
      setIsAnimating(true);
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
    setTimeout(() => {
      onRemoveTodoAnimation(id);
    }, 500);
  }

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <li 
      className={isAnimating ? 'animate__animated animate__fadeOut animate__faster' : "animate__animated animate__bounceInUp animate__faster"}
      onAnimationEnd={handleAnimationEnd}
      >
      {title}
      {/*B: Add onClick event to trigger handleRemoveTodo*/}
      <button 
        className='button-icon'
        onClick={handleRemoveTodo}
      >
        <FontAwesomeIcon icon={["fas", "trash-can"]} size="sm"/>
      </button>
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
  title: PropTypes.string.isRequired
};
