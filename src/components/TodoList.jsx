import React, { useState } from 'react';
// Components
import TodoListItem from './TodoListItem';
// Third party libraries:
import PropTypes from 'prop-types';

const TodoList = ({todoList, onRemoveTodo}) => {
  /*
    ==================================
    =             HOOKS              =
    ==================================
  */
  const [removedIds, setRemovedIds] = useState([]);
  
  /*
    ==================================
    =            HANDLERS            =
    ==================================
  */
  const handleRemoveTodoAnimation = (id) => {
    setRemovedIds((prevIds) => [...prevIds, id]);
  };

  const handleRemoveTodo = (id) => {
    onRemoveTodo(id);
  }

  return (
    <div className='todo-list-container'>
      <ul className='todo-list'>
        {
          todoList.map((toDo) => {
            return (
              <TodoListItem 
                key={toDo.id} 
                {...toDo}
                isRemoved={removedIds.includes(toDo.id)}
                onRemoveTodoAnimation={handleRemoveTodoAnimation}
                onRemoveTodo={handleRemoveTodo}
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
