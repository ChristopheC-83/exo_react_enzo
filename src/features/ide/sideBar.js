/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    lang: "html",
    imgURL: "public/images/4_IDE/html.svg",
    buttonContent: "HMTL",
    code: `
<div>
    <h1>Editeur de code avec React</h1>
    <p>Codez directement depuis votre navigateur !</p>
</div>`,
  },
  {
    id: 2,
    lang: "css",
    imgURL: "public/images/4_IDE/css.svg",
    buttonContent: "CSS",
    code: `
    body{
        font-family:arial, sans-serif;
        padding:25px;
        color:#333;
        background-color : #f1f1f1;    
        }
        `,
  },
];

export const codeUpdater = createSlice({
  name: "code-updater",
  initialState,
  //( => initialState = initialState , mais en moins bête lol)
  reducers: {
    updateCode: (state, action) => {
      state.find((obj) => obj.id === action.payload.id).code =
        action.payload.value;
    },
  },
});

export const { updateCode } = codeUpdater.actions;
export default codeUpdater.reducer;
