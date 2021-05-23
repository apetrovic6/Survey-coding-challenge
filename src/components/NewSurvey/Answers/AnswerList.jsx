import React from "react";

import { Input } from "../../UI/Input";
import { Button } from "../../UI/Button";
export const AnswerList = ({
  a,
  onAnswerInputChange,
  deleteAnswer,
  editable,
}) => {
  return (
    <span className="flex">
      {editable ? (
        <Input
          value={a.answer}
          onChange={onAnswerInputChange.bind(this, a.answerId, a.questionIndex)}
          styling="border-2 border-yellow rounded-lg px-2 mx-2 hover:border-yellow-400 focus:border-yellow-500 focus:outline-none"
        />
      ) : (
        <p className="self-center mx-2">{a.answer}</p>
      )}
      <Button
        icon="x"
        styling="focus:outline-none"
        iconStyle="gray-400"
        onClick={deleteAnswer.bind(this, a.answerId, a.questionIndex)}
      />
    </span>
  );
};
