/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import shadows from "./features/boxy/shadows";
import boxProps from "./features/boxy/boxProps";
import codeUpdater from "./features/ide/sideBar";
import preview from "./features/ide/preview";

export const store = configureStore({
  reducer: {
    shadows,
    boxProps,
    codeUpdater,
    preview,
  },
});
