import React from "react";

export const ToggleButton = ({ text, onClick, value }) => {
  return (
    <div className="flex mx-2 my-2">
      <div
        className={`flex border rounded-2xl mx-2 relative  cursor-pointer ${
          value && "border-yellow-400"
        }`}
        onClick={onClick}
      >
        <input
          type="button"
          className="border-4 mx-4 z-10 opacity-0  h-5 w-5"
        />
        <span
          className={`w-1/2 h-full bg-yellow-400 rounded-full  absolute shadow-lg ${
            value
              ? "transform translate-x-7 transition duration-200"
              : "transform -translate-x-0 transition duration-200"
          }`}
        />
      </div>
      <label>{text}</label>
    </div>
  );
};
