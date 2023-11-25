import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./UserInfo/UserInfoSlice";
import globalReducer from "./globalSlice";
import planReducer from "./Plan/PlanSlice";

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    global: globalReducer,
    plan: planReducer,
  },
});

export default store;
