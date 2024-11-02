// src/features/tasks/tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  selectedTask: null, // To hold a single task for viewing details
  taskToEdit: null,
  searchTerm: '',
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
    readTask: (state, action) => {
      const taskId = action.payload;
      state.selectedTask = state.tasks.find(task => task.id === taskId) || null; // Set selected task or null if not found
    },
    clearSelectedTask: (state) => {
      state.selectedTask = null; // Clear the selected task
    },    
    setTaskToEdit: (state, action) => {
      state.taskToEdit = action.payload; // Set the task to edit
    },
    clearTaskToEdit: (state) => {
      state.taskToEdit = null; // Clear the task to edit
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { addTask, editTask, setSearchTerm, deleteTask, updateTaskState, setTaskToEdit, clearTaskToEdit, readTask, clearSelectedTask } = tasksSlice.actions;
export default tasksSlice.reducer;
