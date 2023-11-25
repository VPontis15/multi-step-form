import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    step: 1,
    name: "",
    phone: "",
    email: "",
  },
  reducers: {
    saveName: function (state, action) {
      state.name = action.payload;
    },

    saveEmail: function (state, action) {
      state.email = action.payload;
    },
    savePhone: function (state, action) {
      state.phone = action.payload;
    },
  },
});

export const getName = (state) => state.userInfo.name;
export const getEmail = (state) => state.userInfo.email;
export const getPhone = (state) => state.userInfo.phone;

export const { saveEmail, saveName, savePhone } = userInfoSlice.actions;

export default userInfoSlice.reducer;
