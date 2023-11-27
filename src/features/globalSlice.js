import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  errors: {
    name: "",
    email: "",
    phone: "",
    price: 0,
    adddon: "",
  },
  isModalOpen: false,
  showErrors: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    increaseStep: function (state) {
      if (Object.values(state.errors).every((error) => !error)) {
        state.step += 1;
        state.showErrors = false;
      } else state.showErrors = true;
    },

    decreaseStep: function (state) {
      Object.keys(state.errors).forEach((key) => {
        return (state.errors[key] = "");
      });
      state.step -= 1;
    },
    addError: function (state, action) {
      state.errors[action.payload.type] = action.payload.message;
    },
    clearError: function (state, action) {
      state.errors[action.payload] = "";
    },
    openModal: function (state) {
      state.isModalOpen = true;
    },
    closeModal: function (state) {
      state.isModalOpen = false;
    },
  },
});

export const getIsOpenModal = (state) => state.global.isModalOpen;
export const getErrorsState = (state) => state.global.showErrors;
export const getStep = (state) => state.global.step;
export const getErrors = (state) => state.global.errors;
export const {
  increaseStep,
  decreaseStep,
  openModal,
  closeModal,
  addError,
  clearError,
} = globalSlice.actions;

export default globalSlice.reducer;
