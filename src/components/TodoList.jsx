import React from 'react';
// Components
import TodoListItem from './TodoListItem';
// Third party libraries:
import PropTypes from 'prop-types';

const TodoList = ({todoList, onRemoveTodo}) => {
  return (
    <div className='todo-list-container'>
      <ul className='todo-list'>
        {
          todoList.map((toDo) => {
            return (
              <TodoListItem 
                key={toDo.id} 
                {...toDo}
                onRemoveTodo={onRemoveTodo}
              />
            );
          })
        }
      </ul>
    </div>
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
