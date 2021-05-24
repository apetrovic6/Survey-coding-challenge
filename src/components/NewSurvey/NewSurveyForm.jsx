import React, { useState } from "react";

import { Container } from "../UI/Container";
import { NewSurveyInput } from "./NewSurveyInput";
import { AddNewQuestion } from "./AddNewQuestion";
export const NewSurveyForm = () => {
  // const [surveyName, setSurveyName] = useState("Nova Anketa");

  // const onInputChange = (e) => {
  //   setSurveyName(e.target.value);
  // };

  return (
    <Container styling="container mx-auto border pt-8">
      <NewSurveyInput
      //  value={surveyName} onChange={onInputChange}
      />
      <AddNewQuestion />
    </Container>
  );
};
