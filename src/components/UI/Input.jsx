import React from "react";

export const Input = ({
  onChange,
  value,
  size,
  type,
  placeholder,
  styling,
  id,
  name,
}) => {
  return (
    <>
      <input
        onChange={onChange}
        value={value}
        type={type}
        size={size}
        placeholder={placeholder}
        id={id}
        className={`${styling} self-center`}
        name={name}
      />
    </>
  );
};
