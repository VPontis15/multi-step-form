import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./UserInfo/UserInfoSlice";
import globalReducer from "./globalSlice";

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    global: globalReducer,
  },
});

export default store;
