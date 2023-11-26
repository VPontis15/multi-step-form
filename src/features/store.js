import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./UserInfo/UserInfoSlice";
import globalReducer from "./globalSlice";
import planReducer from "./Plan/PlanSlice";
import addonsReducer from "./AddOns/AddonsSlice";

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    global: globalReducer,
    plan: planReducer,
    addons: addonsReducer,
  },
});

export default store;
