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
  },
});

export const { saveEmail, saveName } = userInfoSlice.actions;

export default userInfoSlice.reducer;
