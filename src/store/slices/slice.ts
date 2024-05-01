import { createSlice } from "@reduxjs/toolkit";

export type TExample = {
  exampleField: any;
};

const initialState: TExample = {
  exampleField: null,
};

export const exampleSlice = createSlice({
  name: "exampleSlice",
  initialState,
  reducers: {
    exampleMethod: (state, action) => {
      state.exampleField = action.payload;
    },
  },
});
