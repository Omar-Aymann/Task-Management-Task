import { Grid2 } from "@mui/material";
import TaskCard from "./TaskCard";
import { useDispatch, useSelector } from "react-redux";
import { setTaskToEdit } from "../features/tasks/tasksSlice";
import { useEffect, useState } from "react";

const TasksGrid2 = ({ filter }) => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const searchTerm = useSelector((state) => state.tasks.searchTerm);
    const dispatch = useDispatch();
    const [filteredTasks, setFilterTasks] = useState(tasks);

    const handleEditClick = (task) => {
        dispatch(setTaskToEdit(task));
    };

    const colors = {
        'done': '#859F3D',
        'doing': '#DE8F5F',
        'todo': '#C62E2E',
    };

    const priorityColor = {
        'low': '#859F3D',
        'medium': '#DE8F5F',
        'high': '#C62E2E',
    };

    // Filter tasks based on both filter prop and searchTerm
    useEffect(() => {
        const sortedTasks = [...tasks]
            .filter((task) => 
                (!filter || task.state === filter) && // Filter by state if filter prop is provided
                task.title.toLowerCase().includes(searchTerm.toLowerCase()) // Filter by search term
            )
            .sort((a, b) => b.priority - a.priority); // Sort by priority descending
        
        setFilterTasks(sortedTasks);
    }, [tasks, filter, searchTerm]);

    return (
        <Grid2 container sx={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center" }} spacing={2}>
            {filteredTasks.length > 0 ? (
                filteredTasks.map((task) => (
                    <Grid2 key={task.id} item xs={12} sm={6} md={4} lg={3}>
                        <TaskCard color={colors[task.state]} priorityColor={priorityColor[task.priority]} task={task} onEditClick={handleEditClick} />
                    </Grid2>
                ))
            ) : (
                <p>No tasks found.</p>
            )}
        </Grid2>
    );
};

export default TasksGrid2;
