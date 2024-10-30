import { Grid2 } from "@mui/material";
import TaskCard from "./TaskCard";
import { useDispatch, useSelector } from "react-redux";
import { setTaskToEdit } from "../features/tasks/tasksSlice";
import { useEffect } from "react";
const TasksGrid = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const dispatch = useDispatch();
    const handleEditClick = (task) => {
      dispatch(setTaskToEdit(task)); // Set the task to edit in the state
    };

    return (
        <Grid2 container spacing={2}>
            {tasks.length > 0 ? (
        tasks.map(task => (
            <Grid2 key={task.id} item xs={12} sm={6} md={4} lg={3}>
            <TaskCard task={task} onEditClick={handleEditClick} />
            </Grid2>
        
        ))
      ) : (
        <p>No tasks available</p>
      )}
        </Grid2>
    );
};

export default TasksGrid;