import React from "react";

import { Container } from "../UI/Container";
import { NewSurveyInput } from "./NewSurveyInput";
import { AddNewQuestion } from "./AddNewQuestion";
export const NewSurveyForm = () => {
  return (
    <Container styling="container mx-auto border pt-8">
      <NewSurveyInput />
      <AddNewQuestion />
    </Container>
  );
};
