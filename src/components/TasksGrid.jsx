import { Grid2 } from "@mui/material";
import TaskCard from "./TaskCard";
const TasksGrid = () => {
    return (
        <Grid2 container spacing={2}>
            <Grid2 item xs={12} sm={6} md={4} lg={3}>
                <TaskCard />
            </Grid2>
        </Grid2>
    );
};

export default TasksGrid;