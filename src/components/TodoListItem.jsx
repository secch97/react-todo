import React from 'react';

const TodoListItem = ({toDo}) => {
  return (
    <li>{toDo.title}</li>
  );
};

export {
    TodoListItem as default
};
