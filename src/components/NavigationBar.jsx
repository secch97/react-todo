import React from 'react';
// Components
import AddTodoForm from './AddTodoForm';
// Third party libraries:
import PropTypes from 'prop-types';

const NavigationBar = ({onAddTodo}) => {
  return (
    <div className='nav-bar-container'>
      <nav className="nav-bar">
        <div className='nav-bar-logo-container'>
          <a className='nav-bar-logo-link' href="/">
            <img className="nav-bar-logo" alt="Logo for the To Do App" src='../../images/to-do-logo.png'/>
          </a>
        </div>
        <div className='nav-bar-user-controls-container'>
          <AddTodoForm onAddTodo={onAddTodo}/>
        </div>
      </nav>
    </div>
  )
};

export {
    NavigationBar as default
};

/*
  ============================
  =        PROP TYPES        =
  ============================
*/
NavigationBar.propTypes = {
    onAddTodo: PropTypes.func.isRequired
};
  
