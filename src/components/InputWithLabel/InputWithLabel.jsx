import React, { useEffect, useRef } from "react";
//Third party libraries:
import PropTypes from "prop-types";
//CSS
import styles from "./InputWithLabel.module.css";

const InputWithLabel = ({children, inputId, inputType="text", inputPlaceholder, inputValue, inputName, inputOnChange, isLoading, isFocused}) => {
  /*
    ============================
    =          HOOKS           =
    ============================
  */
  const inputRef = useRef();
  /*
    Won't provide dependency array in order 
    to give this side effect on mount and update
   */
  useEffect(() => {
    if (inputRef.current && isFocused){
      inputRef.current.blur();
      inputRef.current.focus();
    }
  });
  
  return (
    <>
      <label className={styles.todoInputLabel} htmlFor={inputId}>
        {children}
      </label>
      <input
        className={styles.todoInput}
        ref={inputRef}
        id={inputId}
        type={inputType}
        placeholder={inputPlaceholder}
        value={inputValue}
        name={inputName}
        onChange={inputOnChange}
        disabled={isLoading}
      />
    </>
  );
};

export { 
  InputWithLabel as default 
};

InputWithLabel.propTypes = {
  children: PropTypes.array.isRequired,
  inputId: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  inputPlaceholder: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputOnChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isFocused: PropTypes.bool.isRequired
};