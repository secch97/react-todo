import React from 'react';

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

function App() {
  return (
    /* Fragment creation */
    <>
      <h1>Todo List</h1>
      <ul>
        {
          todoList.map((toDo) => {
            return (
              <li key={toDo.id}>{toDo.title}</li>
            );
          })
        }
      </ul>
    </>
  );
}

export default App;
