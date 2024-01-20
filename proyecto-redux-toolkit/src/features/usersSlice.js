import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Rody" },
  { id: "1", name: "Juan" },
  { id: "2", name: "Luis" },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const {} = usersSlice.actions;
export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
