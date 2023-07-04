import PropTypes from "prop-types"
import React from "react";
import styles from "./TodoContainer.module.css";


const TodoContainer = ({children}) => {
    return(
        <div className={styles.todoListContainer}>
            {children}
        </div>
    );
};

TodoContainer.propTypes = {
    children: PropTypes.object.isRequired
};

export {
    TodoContainer as default
};
