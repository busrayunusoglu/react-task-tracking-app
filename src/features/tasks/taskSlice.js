import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("tasks")) || [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.items.push({
        id: Date.now(),
        title: action.payload,
        done: false,
      });
    },
    toggleTask: (state, action) => {
      const task = state.items.find((task) => task.id === action.payload);
      if (task) task.done = !task.done;
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, toggleTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
