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
  const [isAnimating, setIsAnimating] = useState(false);
  /* Refs */
  const listItemRef = useRef();
  /* Effects */
  useEffect(()=>{
    if(isRemoved){
      setIsAnimating(true);
      listItemRef.current.className="animate__animated animate__fadeOut animate__fast"
      onRemoveTodo(id);
    }
  }, [isRemoved]);

  /*
    ==================================
    =            HANDLERS            =
    ==================================
  */
  const handleRemoveTodo = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onRemoveTodoAnimation(id);
    }, 500)
  }

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <li 
      ref={listItemRef} 
      className={isAnimating ? 'animate__animated animate__fadeOut animate__faster' : "animate__animated animate__backInUp animate__faster"}
      onAnimationEnd={handleAnimationEnd}
      >
      {title}
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
