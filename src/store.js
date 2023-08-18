/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import shadows from "./features/boxy/shadows";
import boxProps from "./features/boxy/boxProps";

export const store = configureStore({
  reducer: {
    shadows,
    boxProps,
  },
});
