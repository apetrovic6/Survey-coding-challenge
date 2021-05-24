import { createSlice } from "@reduxjs/toolkit";

export const breadcrumbSlice = createSlice({
  name: "breadcrumb",
  initialState: { title: "Nova Anketa" },
  reducers: {
    changeInput: (state, { payload }) => {
      state.title = payload.newInput;
    },
  },
});

export const { changeInput } = breadcrumbSlice.actions;
