/* eslint-disable react/prop-types */
import {  Typography, Button } from '@mui/material';
import { Add } from '@mui/icons-material';

const TodoActionButton = (props) => {

    return (
          <Button onClick={props.onClick} startIcon={<Add />} variant="contained" >
            <Typography className='text-white' sx={{  padding: '5px', fontSize: '1.8rem', fontWeight: 'bold'}}>{props.title}</Typography>
          </Button>
    );
};

export default TodoActionButton;