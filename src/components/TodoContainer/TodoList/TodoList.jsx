import React, { useState } from 'react';
// Components
import TodoListItem from '../TodoListItem/TodoListItem';
// CSS
import styles from "./TodoList.module.css"
// Third party libraries:
import PropTypes from 'prop-types';

const SORTS = {
  NONE: (todoList) => todoList,
  TITLE: (todoList) => todoList.sort((todoA,todoB)=>{
    if(todoA.title<todoB.title){
      return -1
    }
    else if(todoA.title===todoB.title){
      return 0
    }
    else{
      return 1
    }
  }),
  DATE: (todoList) => todoList.sort((todoA,todoB)=>{
    if(todoA.createdAt<todoB.createdAt){
      return -1
    }
    else if(todoA.createdAt===todoB.createdAt){
      return 0
    }
    else{
      return 1
    }
  }),
}

const TodoList = ({todoList, listFetched, onRemoveTodo, onEditTodoModal}) => {

  /*
    ==================================
    =             STATES             =
    ==================================
  */
  const [sort, setSort] = useState({
    sortKey: "NONE",
    isReverse: false
  });

  /*
    ==================================
    =            HANDLERS            =
    ==================================
  */

  const handleSort = (sortKey) => {
    const isReverse = sortKey === sort.sortKey && !sort.isReverse;
    setSort({
      sortKey: sortKey,
      isReverse: isReverse
    });
  }

  const handleRemoveTodo = (id) => {
    onRemoveTodo(id);
  };

  const sortFunction = SORTS[sort.sortKey];
  const sortedList = sort.isReverse ? sortFunction(todoList).reverse() : sortFunction(todoList);

  return (
      <ul className={styles.todoList}>
        <li className={styles.listItem}>
          <button className={styles.title} onClick={()=>handleSort("TITLE")}>Title:</button>
          <button className={styles.date} onClick={()=>handleSort("DATE")}>Created at:</button>
          <button className={styles.actions} disabled>Actions:</button>
        </li>
        {
          sortedList.map((toDo) => {
            return (
                /* F: Once the list is re rendered: if there is a listItem id that matched an id that 
                needs to be removed, send the attribute isRemoved as true to the listItem
                */
                <TodoListItem 
                  key={toDo.id} 
                  {...toDo}
                  onRemoveTodo={handleRemoveTodo}
                  onEditTodoModal={onEditTodoModal}
                  isDisable = {listFetched}
                />
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
  todoList: PropTypes.array.isRequired,
  listFetched: PropTypes.bool.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onEditTodoModal: PropTypes.func.isRequired
};
