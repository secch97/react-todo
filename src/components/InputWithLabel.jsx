import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const InputWithLabel = ({children, inputId, inputType="text", inputPlaceholder, inputValue, inputName, inputOnChange, isLoading}) => {
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
    if (inputRef.current){
      inputRef.current.focus();
    }
  });
  
  return (
    <>
      <label htmlFor={inputId}>
        {children}
      </label>
      <input
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
  inputOnChange: PropTypes.func.isRequired
};