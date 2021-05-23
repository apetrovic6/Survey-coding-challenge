import { createSlice } from "@reduxjs/toolkit";
import { surveySlice } from "./SurveySlice";
export const questionCounterSlice = createSlice({
  name: "questionCounter",
  initialState: 1,
  reducers: {},
  extraReducers: {
    [surveySlice.actions.addQuestion]: (state) => state + 1,
  },
});
