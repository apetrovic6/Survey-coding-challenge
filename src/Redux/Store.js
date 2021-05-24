import { configureStore } from "@reduxjs/toolkit";
import { surveySlice } from "./SurveySlice";
import { questionCounterSlice } from "./questionCounterSlice";
import { breadcrumbSlice } from "./breadcrumbSlice";
export default configureStore({
  reducer: {
    survey: surveySlice.reducer,
    questionCounter: questionCounterSlice.reducer,
    breadcrumb: breadcrumbSlice.reducer,
  },
});
