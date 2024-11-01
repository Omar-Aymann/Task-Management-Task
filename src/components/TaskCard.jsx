import { Check, Create, Delete, RemoveRedEye } from "@mui/icons-material";
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Chip, Box, Badge } from "@mui/material";
import { deleteTask, readTask, updateTaskState, setTaskToEdit } from "../features/tasks/tasksSlice";
import { useDispatch } from "react-redux";

const TaskCard = ({task, onEditClick, color, priorityColor}) => {
    const dispatch = useDispatch();

    // Function to handle marking the task as done
    const handleMarkAsDone = () => {
        dispatch(updateTaskState({ id: task.id, newState: 'done' }));
    };

    return (
        <Badge color={ task.priority === 'Low' ? 'success' : task.priority === 'Medium' ? 'warning' : 'error'} badgeContent={task.priority} overlap="rectangular">
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
                        aspectRatio: '1/1',
                    }}
                    image={task.image}
                />
            </Box>
            <CardContent sx={{ gap: 3 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {task.title}
                </Typography>
                    <Chip label={task.state} className="mt-3" sx={{ fontWeight: 'bold', backgroundColor: color, color: 'white'}}  />
            </CardContent>
            <CardActions sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 , justifyContent: 'space-between' }}>
                <Button onClick={() => dispatch(deleteTask(task.id))} color="error" variant="contained">
                    <Delete />
                </Button>
                <Button onClick={() => dispatch(readTask(task.id))} variant="contained">
                    <RemoveRedEye />
                </Button>
                <Button 
                variant="contained" 
                color="warning"
                onClick={() => onEditClick(task)}
                ><Create /></Button>
                </Box>
                <Button 
                    onClick={handleMarkAsDone} 
                    color="success" 
                    variant="contained" 
                    disabled={task.state === 'done'} // Disable if the task is already done
                    fullWidth
                    startIcon={<Check />}
                >
                    Done
                </Button>
            </CardActions>
        </Card>
        </Badge>
    );
}

export default TaskCard;
