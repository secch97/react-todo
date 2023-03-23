import React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
    {
      id: 1,
      title: "Read lesson 1.1 resources"
    },
    {
      id: 2,
      title: "Complete the Road to React book's exercises"
    },
    {
      id: 3,
      title: "Watch lesson 1.1 videos"
    },
    {
      id: 4,
      title: "Complete lesson 1.1 assignment"
    },
    {
      id: 5,
      title: "Create pull request of lesson 1.1 assignment"
    },
    {
      id: 6,
      title: "Submit lesson 1.1 assignment"
    }
];

const TodoList = () => {
  return (
    <ul>
        {
          todoList.map((toDo) => {
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
