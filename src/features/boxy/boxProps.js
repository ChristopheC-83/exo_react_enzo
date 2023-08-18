/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
  {
    inputNumber: 1,
    name: "Border Radius",
    value: 25,
    type: "range",
    minMax: [0, 250],
  },
  {
    inputNumber: 2,
    name: "Width",
    value: 200,
    type: "range",
    minMax: [0, 500],
  },
  {
    inputNumber: 3,
    name: "Height",
    value: 200,
    type: "range",
    minMax: [0, 500],
  },
  {
    inputNumber: 4,
    name: "Background Color",
    value: "#f1f1f1",
    type: "color",
  },
];

export const boxSlice = createSlice({
  name: "BoxProps",
  initialState,
  reducers: {
    updateBoxValue: (state, action) => {
      state.find((el) => el.inputNumber === action.payload.inputNumber).value =
        action.payload.value;
    },
  },
});

export const { updateBoxValue } = boxSlice.actions;
export default boxSlice.reducer;
