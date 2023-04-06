import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const InputWithLabel = ({children, inputId, inputType="text", inputPlaceholder, inputValue, inputName, inputOnChange}) => {
  return (
    <>
      <label htmlFor={inputId}>
        {children}
      </label>
      <input
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
