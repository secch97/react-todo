import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import InputWithLabel from "../InputWithLabel/InputWithLabel";
import styles from "./EditForm.module.css"

const EditTodoForm = ({modalData, onEditTodoModal}) => {
    /*
        ============================
        =          HOOKS           =
        ============================
     */
    // States
    const [todo, setTodo] = useState(modalData.todo.title);
    // Refs
    const inputRef = useRef();
    // Effects
    useEffect(()=>{
        setTodo(modalData.todo.title);
    }, [modalData])

    useEffect( ()=>{
        if(inputRef.current && modalData.modalStatus){
            inputRef.current.style.visibility="visible";
            inputRef.current.style.opacity=100;
        }

        else{
            inputRef.current.style.visibility="hidden";
            inputRef.current.style.opacity=0;  
        }
    });

    /*
        ============================
        =          HANDLERS           =
        ============================
     */

    const handleTitleChange = (event) =>{
        setTodo(event.target.value);
    };

    const handleEditTodoModal = () =>{
        onEditTodoModal({
            modalStatus: false,
            todo: {}
        });
    }

    return (
        <div className={styles.modalContainer} ref={inputRef}>
            <div className={styles.modal}>
                <h1 className={styles.editFormHeading}>Update task:</h1>
                <div className={styles.editFormContainer}>
                    <form className={styles.editForm}>
                        <div className={styles.editFormControls}>
                            <div className={styles.editFormControl}>
                                <InputWithLabel
                                    inputId="todoTitle"
                                    inputType="text"
                                    inputPlaceholder="Add a task"
                                    inputValue={todo || ""}
                                    inputName = "title"
                                    inputOnChange={handleTitleChange}
                                    isLoading={false}
                                >
                                <FontAwesomeIcon 
                                    icon={["fas", "calendar-plus"]} 
                                    size="xl" 
                                />
                                <span>Title: </span>
                                </InputWithLabel>
                            </div>
                            <div className={styles.editFormControl}>
                                <button className={styles.editFormButton}>
                                    Update
                                </button>
                                <button type="button" className={styles.closeEditFormButton} onClick={handleEditTodoModal}>
                                    Close
                                </button>
                        </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default EditTodoForm