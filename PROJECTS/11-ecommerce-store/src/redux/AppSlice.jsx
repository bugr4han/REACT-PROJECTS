import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export const {} = AppSlice.actions;
export default AppSlice.reducer;
