import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";

const InputWithLabel = ({children, inputId, inputType="text", inputPlaceholder, inputValue, inputName, inputOnChange}) => {
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
      />
    </>
  );
};

export { 
  InputWithLabel as default 
};
