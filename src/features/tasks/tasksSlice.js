// src/features/tasks/tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const taskIndex = state.tasks.findIndex(task => task.id === id);
      if (taskIndex >= 0) {
        state.tasks[taskIndex] = updatedTask;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    updateTaskState: (state, action) => {
      const { id, newState } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.state = newState;
      }
    },
  },
});

export const { addTask, editTask, deleteTask, updateTaskState } = tasksSlice.actions;
export default tasksSlice.reducer;
