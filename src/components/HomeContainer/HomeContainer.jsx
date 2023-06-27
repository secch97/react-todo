import React from 'react';
import styles from "./HomeContainer.module.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Link } from 'react-router-dom';


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
                <button onClick={() => onTableName("TodoList")}>
                    <Link to="/TodoList">
                        GET STARTED
                    </Link>
                </button>
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
}

export default HomeContainer