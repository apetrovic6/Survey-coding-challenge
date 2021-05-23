import React from "react";
import { useDispatch } from "react-redux";

import { addAnswer, addOtherAnswer } from "../../../Redux/SurveySlice";

import { AiFillPlusCircle } from "react-icons/ai";
import { Button } from "../../UI/Button";
export const Buttons = ({ question }) => {
  const dispatch = useDispatch();
  const addAnswerToQuestion = (id, answerCount) => {
    dispatch(addAnswer({ answerCount, id }));
  };

  const onAddOtherAnswer = (id) => {
    dispatch(addOtherAnswer({ id }));
  };

  return (
    <span className="flex">
      <Button
        text="Dodaj Odgovor"
        styling="my-5 px-4 py-2 focus:outline-none"
        iconStyle="yellow-400"
        icon={<AiFillPlusCircle />}
        onClick={addAnswerToQuestion.bind(
          this,
          question.id,
          question.answerCount
        )}
      />

      <Button
        text="Dodaj opciju 'Drugo'"
        styling={`my-5 px-4 py-2 focus:outline-none ${
          question.otherAnswer.length === 0 ? "yellow-400" : "gray-400"
        }`}
        iconStyle={`${
          question.otherAnswer.length === 0 ? "yellow-400" : "gray-400"
        } `}
        icon={<AiFillPlusCircle />}
        onClick={onAddOtherAnswer.bind(this, question.id)}
      />
    </span>
  );
};
