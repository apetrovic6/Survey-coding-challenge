import React from "react";

export const Button = ({ text, styling, icon, iconStyle, onClick }) => {
  return (
    <>
      <button className={`flex select-none  ${styling}`} onClick={onClick}>
        <div className={`self-center mx-2 text-xl text-${iconStyle}`}>
          {icon}
        </div>
        {text}
      </button>
    </>
  );
};
