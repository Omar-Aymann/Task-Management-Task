/* eslint-disable react/prop-types */
import {  Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import { Add } from '@mui/icons-material';

const TodoActionButton = (props) => {

    return (
        <Card
        className='flex flex-row grow justify-between items-center rounded-full'
        sx={{
          borderRadius: '20px',
          backgroundColor: props.color ? props.color : '#fff',
        }}
        >
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: props.textColor ? props.textColor : '#fff' }} component="div">
            {props.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>
            <Add className=' text-slate-400 bg-gray-50 ' sx={{  padding: '5px', borderRadius: '50%', fontSize: '1.8rem'}} />
          </Button>
        </CardActions>
      </Card>
    );
};

export default TodoActionButton;