/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
  {
    id: nanoid(8),
    active: true,
    inset: false,
    inputs: [
      {
        inputNumber: 1,
        name: "Horizontal offset",
        value: 0,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 2,
        name: "Vertical offset",
        value: 0,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 3,
        name: "Blur Radius",
        value: 10,
        type: "range",
        minMax: [0, 250],
      },
      {
        inputNumber: 4,
        name: "Spread Radius",
        value: 0,
        type: "range",
        minMax: [0, 250],
      },
      {
        inputNumber: 5,
        name: "Color",
        value: "#000000",
        type: "color",
      },
    ],
  },
];

export const shadowSlice = createSlice({
  name: "shadows",
  initialState,
  reducers: {
    removeShadow: (state, action) => {},
    addShadow: (state, action) => {},
    updateShadowValue: (state, action) => {},
    updateShadowCheckBox: (state, action) => {},
  },
});

export const {removeShadow,addShadow, updateShadowValue, updateShadowCheckBox }=shadowSlice.actions
export default shadowSlice.reducer