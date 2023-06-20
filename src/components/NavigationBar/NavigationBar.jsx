import React from 'react';
// Components
import AddTodoForm from '../AddTodoForm/AddTodoForm';
// Third party libraries:
import PropTypes from 'prop-types';
//CSS
import styles from "./NavigationBar.module.css"

const NavigationBar = ({onAddTodo, isLoading, inputIsFocused}) => {
  return (
    <div className={styles.navBarContainer}>
      <nav className={styles.navBar}>
        <div className={styles.navBarLogoContainer}>
          <a className={styles.navBarLogoLink} href="/">
            <img className={styles.navBarLogo} alt="Logo for the To Do App" src='../../images/to-do-logo.png'/>
          </a>
        </div>
        <div className={styles.navBarUserControlsContainer}>
          <AddTodoForm onAddTodo={onAddTodo} isLoading={isLoading} inputIsFocused={inputIsFocused}/>
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
    onAddTodo: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    inputIsFocused: PropTypes.bool.isRequired
};
  
