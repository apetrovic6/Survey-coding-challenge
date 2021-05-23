import React from "react";
import { useDispatch } from "react-redux";

import {
  changeMultipleChoice,
  changeIsRequired,
} from "../../../Redux/SurveySlice";

import { ToggleButton } from "../../UI/ToggleButton";
export const ToggleButtons = ({ question }) => {
  const dispatch = useDispatch();

  const onMultipleAnswersToggle = (id, multipleChoices) => {
    dispatch(changeMultipleChoice({ id, multipleChoices }));
  };

  const isRequiredAnswer = (id, requiredAnswer) => {
    dispatch(changeIsRequired({ id, requiredAnswer }));
  };

  return (
    <div>
      <ToggleButton
        text="Viseštruki odabir"
        onClick={onMultipleAnswersToggle.bind(
          this,
          question.id,
          question.multipleChoices
        )}
        value={question.multipleChoices}
      />

      <ToggleButton
        text="Obavezan Odgovor"
        onClick={isRequiredAnswer.bind(
          this,
          question.id,
          question.requiredAnswer
        )}
        value={question.requiredAnswer}
      />
    </div>
  );
};
