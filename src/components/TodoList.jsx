import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = (props) => {
  return (
    <ul>
        {
          props.todoList.map((toDo) => {
            return (
              <TodoListItem key={toDo.id} toDo={toDo}/>
            );
          })
        }
    </ul>
  );
};

export {
    TodoList as default
};
