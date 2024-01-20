import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    sumar: (state) => {
      state.count++;
    },
    restar: (state) => {
      state.count--;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByNumber: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { sumar, restar, reset, incrementByNumber } = counterSlice.actions;
export default counterSlice.reducer;
