import React from "react";
import { useDispatch } from "react-redux";

import {
  deleteOtherAnswer,
  updateOtherAnswer,
} from "../../../Redux/SurveySlice";

import { Input } from "../../UI/Input";
import { Button } from "../../UI/Button";

export const OtherAnswer = ({
  question,
  questionId,
  multipleChoices,
  editable,
}) => {
  const dispatch = useDispatch();

  const onDeleteOtherAnswer = (id) => {
    dispatch(deleteOtherAnswer({ id }));
  };

  const onOtherAnswerInputChange = (id, e) => {
    dispatch(updateOtherAnswer({ id: id, e: e.target.value }));
  };

  return (
    <div>
      <div className="flex mx-8">
        <Input
          type={`${multipleChoices ? "checkbox" : "radio"}`}
          styling="mr-2 self-center"
          name={questionId}
          value={question.otherAnswer[0].answer}
        />

        {editable ? (
          <>
            <input
              readOnly
              defaultValue="Drugi razlozi"
              className="self-center border-2 border-yellow rounded-lg px-2  hover:border-yellow-400 focus:border-yellow-500 focus:outline-none"
            />

            <Button
              icon="x"
              styling="focus:outline-none mx-2"
              iconStyle="gray-400"
              onClick={onDeleteOtherAnswer.bind(this, question.id)}
            />
          </>
        ) : (
          <>
            <p className="self-center hover:border px-2 rounded-lg  hover:border-yellow-400 focus:border-yellow-500 focus:outline-none">
              {question.otherAnswer[0].reason}
            </p>

            <Button
              icon="x"
              styling="focus:outline-none mx-2"
              iconStyle="gray-400"
              onClick={onDeleteOtherAnswer.bind(this, question.id)}
            />
          </>
        )}
      </div>

      {editable ? (
        <textarea
          rows="4"
          columns="9"
          className="border-2 rounded-lg mt-3 mx-14 px-2 hover:border-yellow-400 focus:border-yellow-500 focus:outline-none"
          value={question.otherAnswer[0].answer}
          onChange={onOtherAnswerInputChange.bind(this, question.id)}
        />
      ) : (
        <p className="mx-14 px-1">{question.otherAnswer[0].answer}</p>
      )}
    </div>
  );
};
