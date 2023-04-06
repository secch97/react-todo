import React from 'react';
// Third party libraries:
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TodoListItem = ({id, title, onRemoveTodo}) => {
  return (
    <li className='animate__animated animate__backInUp animate__fast'>
      {title}
      <button 
        className='button-icon'
        onClick={() => onRemoveTodo(id)}
      >
        <FontAwesomeIcon icon={["fas", "trash-can"]} size="l"/>
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
