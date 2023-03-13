import React, { useState } from "react";

const Input = (props) => {
  const {
    placeholder,
    type = "text",
    className = "",
    required,
    ...rest
  } = props;
  console.log(props);
  const [inputValue, setInputValue] = useState("");
  return (
    <label>
      {placeholder}
      {required && <span className="input-required">*</span>}

      <div>
        <input
          {...rest}
          placeholder={placeholder}
          required={required}
          className={`input  ${className}`}
          type={type}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </div>
    </label>
  );
};

export default Input;
