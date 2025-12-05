import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoItems: [],
};

const todoSlice = createSlice({
  name: "todoSliceName",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoItems = [...state.todoItems, action.payload];
    },

    deleteTodoWithID: (state, action) => {
      state.todoItems = state.todoItems.filter((todo) => {
        return todo.id !== action.payload;
      });
    },

    editTodo: (state, action) => {
      state.todoItems = state.todoItems.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, content: action.payload.content };
        } else {
          return todo;
        }
      });
    },
  },
});

export const { addTodo, deleteTodoWithID, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
