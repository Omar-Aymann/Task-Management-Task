import { Check, Create, Delete, RemoveRedEye } from "@mui/icons-material";
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Chip, Box } from "@mui/material";
import { deleteTask, readTask, updateTaskState, setTaskToEdit } from "../features/tasks/tasksSlice";
import { useDispatch } from "react-redux";

const TaskCard = ({task, onEditClick}) => {
    const dispatch = useDispatch();

    // Function to handle marking the task as done
    const handleMarkAsDone = () => {
        dispatch(updateTaskState({ id: task.id, newState: 'done' }));
    };

    return (
        <Card>
            <Box>
                <CardMedia
                    component="img"
                    height="140px"
                    width="140px"
                    sx={{
                        height: '300px',  // Set height
                        width: '300px',   // Full width of the card
                        objectFit: 'cover', // Ensure the image covers the space while maintaining aspect ratio
                    }}
                    image={task.image}
                />
            </Box>
            <CardContent sx={{ gap: 3 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {task.title}
                </Typography>
                <Chip label={task.priority} className="mt-3" sx={{ fontWeight: 'bold' }} color="error" />
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button onClick={() => dispatch(deleteTask(task.id))} color="error" variant="contained">
                    <Delete />
                </Button>
                <Button onClick={() => dispatch(readTask(task.id))} variant="contained">
                    <RemoveRedEye />
                </Button>
                <Button 
                variant="contained" 
                color="secondary"
                onClick={() => onEditClick(task)}
                ><Create /></Button>
                <Button 
                    onClick={handleMarkAsDone} 
                    color="success" 
                    variant="contained" 
                    disabled={task.state === 'done'} // Disable if the task is already done
                >
                    <Check />
                </Button>
            </CardActions>
        </Card>
    );
}

export default TaskCard;
