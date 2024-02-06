import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos1: JSON.parse(localStorage.getItem('todos-toolkit')) || [],
  selectValue: "all",
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodos = {
        id: Date.now(),
        title: action.payload,
        complete: false,
      };
      state.todos1 = [newTodos, ...state.todos1];
    },
    changeCompleted: (state, action) => {
      state.todos1 = state.todos1.map((item) =>
        item.id === action.payload
          ? { ...item, complete: !item.complete }
          : item
      );
    },
    deleteItem: (state, action) => {
      state.todos1 = state.todos1.filter((item) => item.id !== action.payload);
    },
    onSelectValue: (state, action) => {
      state.selectValue = action.payload;
    },
  },
});

export const { addTodo, changeCompleted, deleteItem, onSelectValue } =
  todoSlice.actions;

export default todoSlice.reducer;
