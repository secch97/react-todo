import React from 'react';
// Third party libraries:
import PropTypes from 'prop-types';

const TodoListItem = ({title}) => {
  return (
    <li>{title}</li>
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
