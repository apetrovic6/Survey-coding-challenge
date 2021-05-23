import React from "react";
import { useDispatch } from "react-redux";

import { updateAnswer, removeAnswer } from "../../../Redux/SurveySlice";

import { Input } from "../../UI/Input";
import { AnswerList } from "./AnswerList";
import { OtherAnswer } from "../OtherAnswer/OtherAnswer";
export const AnswerItem = ({
  question,
  questionId,
  editable,
  multipleChoices,
}) => {
  const dispatch = useDispatch();

  const onAnswerInputChange = (answerId, questionIndex, event) => {
    dispatch(
      updateAnswer({ answerId, questionIndex, event: event.target.value })
    );
  };
  const deleteAnswer = (answerId, questionIndex) => {
    dispatch(removeAnswer({ answerId, questionIndex }));
  };

  return (
    <ul>
      {question.answers.map((a) => (
        <li className="mx-8 my-2" key={a.answerId}>
          <div className="flex">
            <Input
              type={`${multipleChoices ? "checkbox" : "radio"}`}
              name={questionId}
              value={a.answer}
              className="mr-2 self-center"
            />
            <AnswerList
              a={a}
              onAnswerInputChange={onAnswerInputChange}
              deleteAnswer={deleteAnswer}
              questionId={questionId}
              editable={editable}
            />
          </div>
        </li>
      ))}
      {question.otherAnswer.length === 1 && (
        <OtherAnswer
          question={question}
          questionId={question.id}
          multipleChoices={question.multipleChoices}
          editable={editable}
        />
      )}
    </ul>
  );
};
