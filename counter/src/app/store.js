import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";

// todo el estado llega al store
export const store = configureStore({
  reducer: {
    // reducers
    counter: counterReducer,
  },
});
