import { configureStore } from "@reduxjs/toolkit";
import { surveySlice } from "./SurveySlice";
import { questionCounterSlice } from "./questionCounterSlice";

export default configureStore({
  reducer: {
    survey: surveySlice.reducer,
    questionCounter: questionCounterSlice.reducer,
  },
});
