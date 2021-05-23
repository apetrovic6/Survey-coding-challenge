import React from "react";

import { Buttons } from "./Buttons";
import { ToggleButtons } from "./ToggleButtons";
export const QuestionButtons = ({ question }) => {
  return (
    <div>
      <Buttons question={question} />
      <ToggleButtons question={question} />
    </div>
  );
};
