import React from 'react';
// Third party libraries:
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//CSS
import styles from "./NavigationBar.module.css"

const NavigationBar = ({children}) => {
  return (
    <div className={styles.navBarContainer}>
      <nav className={styles.navBar}>
        <div className={styles.navBarLogoContainer}>
          <Link className={styles.navBarLogoLink} to="/react-todo">
            <img className={styles.navBarLogo} alt="Logo for the To Do App" src='/react-todo/images/to-do-logo.png'/>
          </Link>
        </div>
        <div className={styles.navBarUserControlsContainer}>
          {children}
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
  children: PropTypes.object
};
  
