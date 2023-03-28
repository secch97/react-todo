import React from 'react';
// Components
import TodoListItem from './TodoListItem';
// Third party libraries:
import PropTypes from 'prop-types';

const TodoList = ({todoList}) => {
  return (
    <ul>
        {
            todoList.map(({id, ...toDo}) => {
            return (
              <TodoListItem key={id} {...toDo}/>
            );
          })
        }
    </ul>
  );
};

export {
    TodoList as default
};

/*
  ===========================
  =       PROP-TYPES        =
  ===========================
*/
TodoList.propTypes = {
  todoList: PropTypes.array.isRequired
}
