import React from "react";

const CustomInput = (props) => {
  const { type, placeholder, i_id, i_class, name, val, onChng, onBlr } = props;
  return (
    <div className="form-floating mt-3 mb-1">
      <input
        type={type}
        className={`form-control ${i_class}`}
        id={i_id}
        placeholder={placeholder}
        name={name}
        value={val}
        onChange={onChng}
        onBlur={onChng}
      />
      <label htmlFor={placeholder}>{placeholder}</label>
    </div>
  );
};

export default CustomInput;
