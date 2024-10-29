import { Grid2 } from "@mui/material";
import TaskCard from "./TaskCard";
import { useSelector } from "react-redux";

const TasksGrid = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    return (
        <Grid2 container spacing={2}>
            {tasks.length > 0 ? (
        tasks.map(task => (
            <Grid2 key={task.id} item xs={12} sm={6} md={4} lg={3}>
            <TaskCard id={task.id}  title={task.title} priority={task.priority} state={task.state} image={task.image}  />
            </Grid2>
        
        ))
      ) : (
        <p>No tasks available</p>
      )}
        </Grid2>
    );
};

export default TasksGrid;