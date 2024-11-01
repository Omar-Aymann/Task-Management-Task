import React, { useEffect, useState } from 'react';
import { TextField, Button, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { addTask, editTask } from '../features/tasks/tasksSlice';

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required')
    .min(3, 'Title must be at least 3 characters'),
  description: Yup.string()
    .required('Description is required')
    .min(5, 'Description must be at least 5 characters'),
  priority: Yup.string().required('Priority is required'),
  state: Yup.string().required('State is required'),
  image: Yup.mixed().required('Image is required').nullable(),
});

const TaskForm = ({ task, handleClose }) => { // Destructure task prop
  const dispatch = useDispatch();
  const [isImageUploaded, setIsImageUploaded] = useState(false); // Track image upload status
  const [imagePreview, setImagePreview] = useState(null); // To preview uploaded image

  // React Hook Form initialization
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema), // Use Yup for validation
    mode: 'onChange', // Validate on change
  });

  const imageFile = watch('image'); // Watch image input to handle preview

  // Image upload handler
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Store base64 image for preview
        setValue('image', file); // Set the file in React Hook Form
        setIsImageUploaded(true); // Mark image as uploaded
        setValue('image', file, { shouldValidate: true }); // Set file and trigger validation

      };
      reader.readAsDataURL(file); // Convert image to base64
    }
  };

  // Form submission handler
  const onSubmit = (data) => {
    const taskData = {
      ...data,
      id: task ? task.id : Date.now(), // Use existing ID if editing
      image: imagePreview, // Store base64 image
    };

    if (task) {
      dispatch(editTask({ id: task.id, updatedTask: taskData })); // Pass as object with id and updatedTask
    } else {
      dispatch(addTask(taskData)); // Dispatch action to add a new task
    }

    // Reset form after submission
    reset();
    setIsImageUploaded(false);
    setImagePreview(null);
    handleClose();
  };

  // Effect to update form values when task prop changes (for editing)
  useEffect(() => {
    if (task) {
      setValue('image', task.image); // Set existing image
      setImagePreview(task.image); // Preview existing image
      setIsImageUploaded(true); // Mark image as uploaded
      setValue('title', task.title); // Set existing title
      setValue('description', task.description); // Set existing description
      setValue('priority', task.priority); // Set existing priority
      setValue('state', task.state); // Set existing state
    }
  }, [task, setValue]);

  return (
    <Box component="form" sx={{ mt: 5 }} onSubmit={handleSubmit(onSubmit)} noValidate>
      <Typography variant="h5" gutterBottom>
        {task ? "Edit Task" : "Create New Task"}
      </Typography>

      {/* Image Upload */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
        <Button variant="contained" component="label" sx={{ mb: 2 }}>
          Upload Image
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageUpload} // Handle file upload
          />
        </Button>
        {isImageUploaded && <Typography color="green">Image uploaded</Typography>}
        {errors.image && <Typography color="error">{errors.image.message}</Typography>} {/* Validation error */}
      </Box>

      {/* Image Preview */}
      {imagePreview && <img src={imagePreview} alt="Preview" style={{ width: '100px', height: '100px', marginBottom: '10px' }} />}

      {/* Task Title */}
      <TextField
        label="Task Title"
        variant="outlined"
        fullWidth
        {...register('title')}
        error={!!errors.title} // Highlight error field
        helperText={errors.title?.message} // Display error message
        sx={{ mb: 2 }}
      />

      {/* Task Description */}
      <TextField
        label="Task Description"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        {...register('description')}
        error={!!errors.description}
        helperText={errors.description?.message}
        sx={{ mb: 2 }}
      />

      {/* Task Priority - Radio Buttons */}
      <FormControl component="fieldset" sx={{ mb: 2 }}>
        <FormLabel component="legend">Priority</FormLabel>
        <Controller
          name="priority"
          control={control}
          defaultValue="Medium" // Default value for new tasks
          render={({ field }) => (
            <RadioGroup {...field}>
              <FormControlLabel value="High" control={<Radio />} label="High" />
              <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
              <FormControlLabel value="Low" control={<Radio />} label="Low" />
            </RadioGroup>
          )}
        />
        {errors.priority && <Typography color="error">{errors.priority.message}</Typography>}
      </FormControl>

      {/* Task State - Radio Buttons */}
      <FormControl component="fieldset" sx={{ mb: 2 }}>
        <FormLabel component="legend">State</FormLabel>
        <Controller
          name="state"
          control={control}
          defaultValue="todo" // Default value for new tasks
          render={({ field }) => (
            <RadioGroup {...field}>
              <FormControlLabel value="todo" control={<Radio />} label="Todo" />
              <FormControlLabel value="doing" control={<Radio />} label="Doing" />
              <FormControlLabel value="done" control={<Radio />} label="Done" />
            </RadioGroup>
          )}
        />
        {errors.state && <Typography color="error">{errors.state.message}</Typography>}
      </FormControl>

      {/* Submit Button */}
      <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        fullWidth
        disabled={!isValid} // Disable button if form is invalid
      >
        {task ? "Update Task" : "Add Task"} {/* Change button text based on edit or create */}
      </Button>
    </Box>
  );
};

export default TaskForm;
