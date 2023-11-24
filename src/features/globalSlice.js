import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  errors: {},
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    increaseStep: function (state) {
      state.step += 1;
    },

    decreaseStep: function (state) {
      state.step -= 1;
    },
  },
});

export const getStep = (state) => state.global.step;

export const { increaseStep, decreaseStep } = globalSlice.actions;

export default globalSlice.reducer;
