import React from 'react';
// Components
// Third party libraries:
import PropTypes from 'prop-types';
//CSS
import styles from "./NavigationBar.module.css"

const NavigationBar = ({children}) => {
  return (
    <div className={styles.navBarContainer}>
      <nav className={styles.navBar}>
        <div className={styles.navBarLogoContainer}>
          <a className={styles.navBarLogoLink} href="/">
            <img className={styles.navBarLogo} alt="Logo for the To Do App" src='../../images/to-do-logo.png'/>
          </a>
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
  children: PropTypes.object.isRequired
};
  
