import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { useClickOutside } from "../../hooks/useClickOutside";

import { addQuestion } from "../../Redux/SurveySlice";
import { QuestionItem } from "./QuestionItem";
import { AnswerItem } from "./Answers/AnswerItem";

import { AiFillPlusCircle } from "react-icons/ai";
import { Button } from "../UI/Button";
import { QuestionButtons } from "./QuestionOptions/QuestionButtons";

export const AddNewQuestion = () => {
  const questions = useSelector((state) => state.survey);
  const questionIdCount = useSelector((state) => state.questionCounter);

  const dispatch = useDispatch();

  const { editable, ref } = useClickOutside(false);

  const addQuestionToList = () => {
    dispatch(addQuestion(questionIdCount));
  };

  return (
    <>
      <div className="mx-32 mt-8 w-1/2" ref={ref}>
        {questions.map((question) => (
          <div key={question.id}>
            <div className="mx-2 ">
              <div>
                <div>
                  <QuestionItem question={question} editable={editable} />
                </div>
                <div>
                  <AnswerItem
                    question={question}
                    questionId={question.id}
                    edit={question.isEditing}
                    multipleChoices={question.multipleChoices}
                    editable={editable}
                  />
                </div>
              </div>

              <QuestionButtons question={question} editable={editable} />
            </div>
          </div>
        ))}

        {questions.length >= 1 && <p className="mx-6">* Obavezan odgovor</p>}
      </div>

      <div className="flex justify-center">
        <Button
          text="Dodaj pitanje"
          styling="border border-yellow-400 my-5 px-4 py-2"
          iconStyle="yellow-400"
          icon={<AiFillPlusCircle />}
          onClick={addQuestionToList}
        />
      </div>
    </>
  );
};
