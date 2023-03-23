import React from 'react';

const TodoListItem = (props) => {
  return (
    <li>{props.toDo.title}</li>
  );
};

export {
    TodoListItem as default
};
