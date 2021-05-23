import React from "react";
import { Input } from "../UI/Input";
import { RiPencilFill } from "react-icons/ri";
export const NewSurveyInput = ({ value, onChange }) => {
  return (
    <div className="flex justify-center">
      <Input
        styling="text-center border-2 border-yellow text-yellow-400 py-4 rounded-lg hover:border-yellow-400 focus:border-yellow-500 focus:outline-none"
        size="50"
        value={value}
        onChange={onChange}
      />
      <RiPencilFill className="text-5xl transform -translate-x-5 translate-y-1 shadow-lg rounded-full bg-white px-3 py-3" />
    </div>
  );
};
