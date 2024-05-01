import { combineReducers } from "@reduxjs/toolkit";
import { exampleSlice } from "./slices/slice";

export const reducers = combineReducers({
  exampleReducer: exampleSlice.reducer,
});
