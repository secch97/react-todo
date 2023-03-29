import React from 'react';
// Third party libraries:
import PropTypes from 'prop-types';

const TodoListItem = ({title}) => {
  return (
    <li className='animate__animated animate__backInUp animate__fast'>{title}</li>
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
