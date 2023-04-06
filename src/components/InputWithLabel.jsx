import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const InputWithLabel = ({labelText, inputId, inputType="text", inputPlaceholder, inputValue, inputName, inputOnChange}) => {
  return (
    <>
      <label htmlFor={inputId}>
        <FontAwesomeIcon 
            icon={["fas", "calendar-plus"]} 
            size="xl" 
        />
        <span>{labelText}</span>
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
