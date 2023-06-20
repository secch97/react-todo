import React from "react";
import styles from "./TodoContainer.module.css";

const TodoContainer = ({children}) => {
    return(
        <div className={styles.todoListContainer}>
            {children}
        </div>
    );
};

export {
    TodoContainer as default
};
