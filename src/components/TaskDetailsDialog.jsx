import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Check, Delete } from '@mui/icons-material';
import { clearSelectedTask, deleteTask, readTask, updateTaskState } from '../features/tasks/tasksSlice';
const TaskDetailsDialog = ({ open, handleClose }) => {
  const task = useSelector((state) => state.tasks.selectedTask);
  const dispatch = useDispatch();
  if (task == null) {
    return null;
  }
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Task Details</DialogTitle>
      <DialogContent>
        {/* Display task image */}
        {task.image && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <img src={task.image} alt="Task" style={{ maxWidth: '100%', maxHeight: 200 }} />
          </Box>
        )}

        {/* Task Title */}
        <Typography variant="h6">Title: {task.title}</Typography>

        {/* Task Description */}
        <Typography variant="body1" gutterBottom>Description: {task.description}</Typography>

        {/* Task Priority */}
        <Typography variant="body1">Priority: {task.priority}</Typography>

        {/* Task State */}
        <Typography variant="body1">State: {task.state}</Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
        <Button onClick={() => {
          dispatch(deleteTask(task.id))
          dispatch(clearSelectedTask())
          handleClose();
          }} color="error" variant="contained"><Delete /></Button>
        <Button  color="success" variant="contained"                     
        onClick={() => {
          dispatch(updateTaskState({ id: task.id, newState: 'done' }), )
          dispatch(readTask(task.id))
        }} disabled={task.state == 'done'} // Disable if the task is already done
        ><Check /></Button>

      </DialogActions>
    </Dialog>
  );
};

export default TaskDetailsDialog;
