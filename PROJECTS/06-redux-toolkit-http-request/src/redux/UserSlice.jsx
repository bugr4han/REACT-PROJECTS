import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
};

export const getAllUsers = createAsyncThunk("users", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // HTTP isteği olmazsa kullanılır
  },
  extraReducers: (builder) => {
    // HTTP isteklerinde kullanılır
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export default UserSlice.reducer;
