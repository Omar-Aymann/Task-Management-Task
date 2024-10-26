import  { useState } from 'react';
import { TextField, Button, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, Box, Typography } from '@mui/material';

const TaskForm = () => {
  // State to handle form values
  const [task, setTask] = useState({
    image: null,
    title: '',
    description: '',
    priority: 'Medium', // default value
    state: 'todo',      // default value
  });

  // Handle text input changes (title, description)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  // Handle file input (image)
  const handleImageChange = (e) => {
    setTask({
      ...task,
      image: e.target.files[0],
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task); // Output the form data
    // You can process the form submission here (e.g., send to API)
  };

  return (
    <Box component="form" sx={{ mt: 5 }} onSubmit={handleSubmit} noValidate>
      <Typography variant="h5" gutterBottom>
        Create New Task
      </Typography>

      {/* Image Upload */}
      <Button variant="contained" component="label" sx={{ mb: 2 }}>
        Upload Image
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={handleImageChange}
        />
      </Button>
      {task.image && <Typography>{task.image.name}</Typography>}

      {/* Task Title */}
      <TextField
        label="Task Title"
        variant="outlined"
        fullWidth
        name="title"
        value={task.title}
        onChange={handleChange}
        required
        sx={{ mb: 2 }}
      />

      {/* Task Description */}
      <TextField
        label="Task Description"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        name="description"
        value={task.description}
        onChange={handleChange}
        required
        sx={{ mb: 2 }}
      />

      {/* Task Priority - Radio Buttons */}
      <FormControl component="fieldset" sx={{ mb: 2 }}>
        <FormLabel component="legend">Priority</FormLabel>
        <RadioGroup
          name="priority"
          value={task.priority}
          onChange={handleChange}
        >
          <FormControlLabel value="High" control={<Radio />} label="High" />
          <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
          <FormControlLabel value="Low" control={<Radio />} label="Low" />
        </RadioGroup>
      </FormControl>

      {/* Task State - Radio Buttons */}
      <FormControl component="fieldset" sx={{ mb: 2 }}>
        <FormLabel component="legend">State</FormLabel>
        <RadioGroup
          name="state"
          value={task.state}
          onChange={handleChange}
        >
          <FormControlLabel value="todo" control={<Radio />} label="Todo" />
          <FormControlLabel value="doing" control={<Radio />} label="Doing" />
          <FormControlLabel value="done" control={<Radio />} label="Done" />
        </RadioGroup>
      </FormControl>

      {/* Submit Button */}
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Task
      </Button>
    </Box>
  );
};

export default TaskForm;
