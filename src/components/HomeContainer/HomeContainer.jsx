import React from 'react';
//Third party libraries:
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
//Components:
import NavigationBar from "../NavigationBar/NavigationBar";
//CSS:
import styles from "./HomeContainer.module.css";

const HomeContainer = ({onTableName}) => {
  return (
    <>
        <header className={styles.homeContainer}>
            <NavigationBar/>
        </header>
        <main className={styles.homeContainer}>
            <div className={styles.homePanelLeft}>
                <img
                    src='../../images/left-panel.png'
                    alt='A man holding a phone'
                />
            </div>
            <div className={styles.homePanelCenter}>
                <img
                    className={styles.toDoLogo}
                    src="../../images/to-do.png"
                    alt='App logo'
                />
                <img
                    className={styles.jointPanels}
                    src="../../images/joint-panels.png"
                    alt='Man and woman holding a phone'
                />
                <h1>To Do App</h1>
                <h2>Organize, Accomplish, Succeed</h2>
                
                    <Link to="/TodoList" className={styles.homeContainerLink}>
                        <button onClick={() => onTableName("TodoList")}>
                            GET STARTED
                        </button>
                    </Link>
            </div>
            <div className={styles.homePanelRight}>
                <img
                    src='../../images/right-panel.png'
                    alt='A woman holding a phone'
                /> 
            </div>
        </main>    
    </>
  )
};

HomeContainer.propTypes = {
    onTableName: PropTypes.func.isRequired
};

export default HomeContainer;