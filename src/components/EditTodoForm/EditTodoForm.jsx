import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import InputWithLabel from "../InputWithLabel/InputWithLabel";
import styles from "./EditForm.module.css"

const EditTodoForm = ({modalData, onEditTodoModal, onEditTodo}) => {
    /*
        ============================
        =          HOOKS           =
        ============================
     */
    // States
    const [todo, setTodo] = useState(modalData.todo);
    const [animation, setAnimation] = useState(false);
    // Refs
    const modalRef = useRef();

    // Effects
    useEffect(()=>{
        setTodo(modalData.todo);
        setAnimation(true);
    }, [modalData])

    useEffect( ()=>{
        if(modalRef.current && modalData.modalStatus){
            modalRef.current.style.display="flex";
        }
        else{
            modalRef.current.style.display="none";
        }
    });

    /*
        ============================
        =          HANDLERS           =
        ============================
     */

    const handleTitleChange = (event) =>{
        setTodo(
            {
                id: todo.id,
                title: event.target.value
            }
        );
    };

    const handleEditTodoModal = () =>{
        setAnimation(false);
        setTimeout(()=>{
            onEditTodoModal({
                modalStatus: false,
                todo: todo
            });
        }, 500)
    }

    const handleEditTodoFormSubmit = (event) => {
        event.preventDefault();
        if(!todo.title.trim()){
            return;
        }
        setAnimation(false);
        onEditTodo({
            id: todo.id,
            title: todo.title.trim()
        });
    }

    return (
        <div className={`${styles.modalContainer} ${animation ? "animate__animated animate__backInDown animate__faster" : "animate__animated animate__backOutUp animate__faster"}`} ref={modalRef}>
            <div className={styles.modal}>
                <h1 className={styles.editFormHeading}>Update task:</h1>
                <div className={styles.editFormContainer}>
                    <form className={styles.editForm} onSubmit={handleEditTodoFormSubmit}>
                        <div className={styles.editFormControls}>
                            <div className={styles.editFormControl}>
                                <InputWithLabel
                                    inputId="todoTitle"
                                    inputType="text"
                                    inputPlaceholder="Add a task"
                                    inputValue={todo.title || ""}
                                    inputName = "title"
                                    inputOnChange={handleTitleChange}
                                    isLoading={false}
                                    isFocused={modalData.modalStatus}
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