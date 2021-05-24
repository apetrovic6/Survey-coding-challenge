import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInput } from "../../Redux/breadcrumbSlice";
import { Input } from "../UI/Input";
import { RiPencilFill } from "react-icons/ri";
export const NewSurveyInput = (
  {
    //  value, onChange
  }
) => {
  const dispatch = useDispatch();
  const surveyName = useSelector((state) => state.breadcrumb);
  const onInputChange = (e) => {
    dispatch(changeInput({ newInput: e.target.value }));
  };

  return (
    <div className="flex justify-center">
      <Input
        styling="text-center border-2 border-yellow text-yellow-400 py-4 rounded-lg hover:border-yellow-400 focus:border-yellow-500 focus:outline-none"
        size="50"
        value={surveyName.title}
        onChange={onInputChange}
      />
      <RiPencilFill className="text-5xl transform -translate-x-5 translate-y-1 shadow-lg rounded-full bg-white px-3 py-3" />
    </div>
  );
};
