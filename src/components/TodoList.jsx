import React from 'react';
import TodoListItem from './TodoListItem';

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
