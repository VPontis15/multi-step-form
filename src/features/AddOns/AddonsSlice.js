import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addon: {
    isChecked: false,
    title: "",
    price: "",
  },
  addons: [],
};

const addOnsSlice = createSlice({
  name: "addons",
  initialState,
  reducers: {
    selectAddon: function (state, action) {
      return {
        ...state,
        addon: {
          title: action.payload.title,
          price: action.payload.price,
          isChecked: true,
        },
      };
    },
    removeSelectedAddon: function (state, action) {
      state.addons = state.addons.filter(
        (addon) => addon.title !== action.payload,
      );
      Object.keys(state.addon).forEach((key) => {
        state.addon[key] = "";
        state.addon["isChecked"] = false;
      });
    },
    addAddon: function (state) {
      state.addons.push(state.addon);
    },
  },
});

export const getAddon = (state) => state.addons.addon;
export const getAddons = (state) => state.addons.addons;
export const { selectAddon, addAddon, removeSelectedAddon } =
  addOnsSlice.actions;

export default addOnsSlice.reducer;
