import React, { useEffect, useRef, useState } from 'react';
// Third party libraries:
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TodoListItem = ({id, title, onRemoveTodo}) => {

  const [isRemoved, setIsRemoved] = useState(false);

  const listItemRef = useRef();

  useEffect(()=>{
    if(isRemoved){
      listItemRef.current.className="animate__animated animate__fadeOut animate__fast"
      return;
    }
  }, [isRemoved]);

  const handleRemoveTodo = () => {
    setIsRemoved(true);
    setTimeout(() => {
      onRemoveTodo(id);
    }, 1000);
  }

  return (
    <li ref={listItemRef} className='animate__animated animate__backInUp animate__fast'>
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
