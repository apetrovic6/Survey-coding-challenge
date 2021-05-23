import { createSlice } from "@reduxjs/toolkit";

export const surveySlice = createSlice({
  name: "survey",
  initialState: [],
  reducers: {
    addQuestion: (state, { payload }) => {
      state.push({
        id: payload,
        title: `Pitanje ${payload}`,
        multipleChoices: false,
        requiredAnswer: false,
        answers: [],
        otherAnswer: [],
        answerCount: 1,
        isEditing: false,
      });
    },

    updateQuestion: (state, { payload }) => {
      const index = state.findIndex(
        (index) => Number(index.id) === Number(payload.id)
      );
      state[index].title = payload.title;
    },

    removeQuestion: (state, { payload }) => {
      const index = state.findIndex(
        (index) => Number(index.id) === Number(payload.id)
      );
      state.splice(index, 1);
    },

    changeMultipleChoice: (state, { payload }) => {
      const index = state.findIndex(
        (index) => Number(index.id) === Number(payload.id)
      );

      state[index].multipleChoices = !payload.multipleChoices;
    },

    changeIsRequired: (state, { payload }) => {
      const index = state.findIndex(
        (index) => Number(index.id) === Number(payload.id)
      );
      state[index].requiredAnswer = !payload.requiredAnswer;
    },

    addAnswer: (state, { payload }) => {
      const index = state.findIndex(
        (index) => Number(index.id) === Number(payload.id)
      );
      state[index].answerCount = payload.answerCount + 1;

      state[index].answers.push({
        answerId: payload.answerCount,
        questionIndex: index,
        answer: `Odgovor ${payload.answerCount} `,
      });
    },

    updateAnswer: (state, { payload }) => {
      const index = state[payload.questionIndex].answers.findIndex(
        (index) => Number(index.answerId) === Number(payload.answerId)
      );

      state[payload.questionIndex].answers[index].answer = payload.event;
    },

    removeAnswer: (state, { payload }) => {
      const index = state[payload.questionIndex].answers.findIndex(
        (index) => Number(index.answerId) === Number(payload.answerId)
      );

      state[payload.questionIndex].answers.splice(index, 1);
    },

    addOtherAnswer: (state, { payload }) => {
      const index = state.findIndex(
        (index) => Number(index.id) === Number(payload.id)
      );

      if (state[index].otherAnswer.length === 0) {
        state[index].otherAnswer.push({
          reason: "Drugi razlozi",
          answer: "Molimo upišite komentar.",
          questionIndex: index,
        });
      }
    },

    deleteOtherAnswer: (state, { payload }) => {
      const index = state.findIndex(
        (index) => Number(index.id) === Number(payload.id)
      );

      state[index].otherAnswer.splice(0, 1);
    },

    updateOtherAnswer: (state, { payload }) => {
      const index = state.findIndex(
        (index) => Number(index.id) === Number(payload.id)
      );

      state[index].otherAnswer[0].answer = payload.e;
    },
  },
});

export const {
  addQuestion,
  updateQuestion,
  removeQuestion,
  changeMultipleChoice,
  changeIsRequired,
  addAnswer,
  updateAnswer,
  removeAnswer,
  addOtherAnswer,
  deleteOtherAnswer,
  updateOtherAnswer,
} = surveySlice.actions;
