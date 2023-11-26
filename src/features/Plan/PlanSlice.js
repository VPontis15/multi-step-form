import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plan: {
    price: 0,
    title: "",
    choice: "monthly",
  },
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    addPrice: function (state, action) {
      state.plan.price = action.payload;
    },
    addTitle: function (state, action) {
      state.plan.title = action.payload;
    },
    addChoice: function (state, action) {
      state.plan.choice = action.payload;
    },
  },
});

export const getChoice = (state) => state.plan.plan.choice;
export const getPrice = (state) => state.plan.plan.price;
export const getTitle = (state) => state.plan.plan.title;
export const getSumOfPrices = (state) =>
  state.addons.addons.reduce((sum, addon) => sum + addon.price, 0);

export const { addPrice, addTitle, addChoice } = planSlice.actions;
export default planSlice.reducer;
