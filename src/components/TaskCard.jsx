import { Check, RemoveRedEye } from "@mui/icons-material";
import { Card, CardMedia, CardContent,Typography, CardActions, Button, Chip } from "@mui/material";

const TaskCard = () => {
    return (
        <Card>
            <CardMedia
              component="img"
                height="140"
            image="https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">

            </CardMedia>
            <CardContent sx={{ gap: 3 }}>
                <Typography gutterBottom variant="h5" component="div">
                    Task Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Task Description
                </Typography>
                <Chip label="High" className="mt-3" sx={{fontWeight: 'bold'}} color="error" ></Chip>
            </CardContent>
            <CardActions>
                <Button variant="contained"><RemoveRedEye /></Button>
                <Button  color="success" variant="contained" ><Check /></Button>
            </CardActions>
        </Card>
    )
}

export default TaskCard;