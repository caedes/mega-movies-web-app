import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fill: (_state, action) => action.payload,
    empty: (_state) => [],
  },
});

export const { fill, empty } = moviesSlice.actions;

export default moviesSlice.reducer;
