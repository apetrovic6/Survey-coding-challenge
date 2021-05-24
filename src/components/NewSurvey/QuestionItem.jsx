import React from "react";
import { useDispatch } from "react-redux";

import { updateQuestion, removeQuestion } from "../../Redux/SurveySlice";

import { Input } from "../UI/Input";
import { Button } from "../UI/Button";
export const QuestionItem = ({ question, editable }) => {
  const dispatch = useDispatch();

  const onQuestionInputChange = (e) => {
    e.preventDefault();
    dispatch(updateQuestion({ title: e.target.value, id: e.target.id }));
  };

  const deleteQuestion = (id) => {
    dispatch(removeQuestion({ id }));
  };

  return (
    <div className="flex">
      <p className="self-center">{question.id}.</p>
      {editable ? (
        <Input
          styling="border-2 border-yellow rounded-lg px-2 mx-2 hover:border-yellow-400 focus:border-yellow-500 focus:outline-none"
          onChange={onQuestionInputChange}
          value={question.title}
          id={question.id}
          type="text"
        />
      ) : (
        <p className="self-center mx-1 hover:border px-2 rounded-lg  hover:border-yellow-400 focus:border-yellow-500 focus:outline-none">
          {question.title}
        </p>
      )}

      {question.requiredAnswer && <p className="text-red-600">*</p>}

      <Button
        icon="x"
        styling="focus:outline-none "
        iconStyle="gray-400"
        onClick={deleteQuestion.bind(this, question.id)}
      />
    </div>
  );
};
