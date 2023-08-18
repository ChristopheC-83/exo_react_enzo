/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import shadow from "./features/boxy/shadow";
import boxProps from "./features/boxy/boxProps";

export const store = configureStore({
  reducer: {
    shadow,
    boxProps,
  },
});
