import { Check, RemoveRedEye } from "@mui/icons-material";
import { Card, CardMedia, CardContent,Typography, CardActions, Button, Chip, Box } from "@mui/material";

const TaskCard = (props) => {
    return (
        <Card>
            <Box>
                <CardMedia
                component="img"
                    height="140px"
                    width="140px"
                    sx={{
                        height: '300px',  // Set height
                        width: '300px',  // Full width of the card
                        objectFit: 'cover',  // Ensure the image covers the space while maintaining aspect ratio
                      }}
                image={props.image}>
                </CardMedia>
            </Box>
            <CardContent sx={{ gap: 3 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Chip label={props.priority} className="mt-3" sx={{fontWeight: 'bold'}} color="error" ></Chip>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained"><RemoveRedEye /></Button>
                <Button  color="success" variant="contained" ><Check /></Button>
            </CardActions>
        </Card>
    )
}

export default TaskCard;