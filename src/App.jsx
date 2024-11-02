import { Container, Box, Chip, Typography, TextField } from '@mui/material';
import SideMenu from './components/SideMenu';
import TodoActionButton from './components/TodoActionButton';
import { useState } from 'react';
import CreateTaskModal from './components/CreateTaskModal';
import TasksGrid from './components/TasksGrid';
import TaskDetailsDialog from './components/TaskDetailsDialog';
import { useDispatch, useSelector } from 'react-redux';
import { clearSelectedTask, setTaskToEdit } from './features/tasks/tasksSlice';
import { Search } from '@mui/icons-material';
import SearchBar from './components/SearchBar';

const AppLayout = () => {
  const dispatch = useDispatch();
  const [formOpen, setFormOpen] = useState(false);
  const task = useSelector((state) => state.tasks.selectedTask);
  const taskToEdit = useSelector((state) => state.tasks.taskToEdit);
  const [filter, setFilter] = useState(null);
  

  const colors = {
    'done': '#859F3D',
    'doing': '#DE8F5F',
    'todo': '#C62E2E',
}

  // Handlers for opening and closing the dialog
  const handleClickOpen = () => {
    setFormOpen(true);
  };
  
  const handleClose = () => {
    setFormOpen(false);
    dispatch(clearSelectedTask());
    dispatch(setTaskToEdit(null));
  };
  const setFilterTasks = (input) => {
    if(input == filter) {
      setFilter(null)
      return 0;
    }
    setFilter(input)
  }
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', height: '100vh' }}>
      {/* Permanent Drawer */}
      {/* <SideMenu /> */}


      {/* Modal for creating new tasks */}
      <CreateTaskModal taskToEdit={taskToEdit} open={formOpen || taskToEdit != null} handleClose={handleClose} />


      {/* Modal for displaying task details */}
      <TaskDetailsDialog open={task != null} handleClose={handleClose} />


      {/* Main Content Area */}
      <Container
        sx={{
          flexGrow: 1,
          mt: 10,  // Top margin to avoid overlapping with AppBar
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >

        {/* Add Task Button and Task Cards */}
        <Box className="flex w-full flex-col gap-5">
          <SearchBar />
            <TodoActionButton
              color="green"
              textColor="#000"
              onClick={handleClickOpen}  // Open form on button click
              title="Add Task"
            />
{/* Filter Chips */}
<Box sx={{ display: 'flex', flexDirection: 'column', width: 'full', justifyContent: 'center', gap: 1, alignItems: 'center' }}>
  <Typography variant="h6" fontWeight={'bold'} >
    Filter Tasks
  </Typography>
  <Box sx={{ display: 'flex', flexDirection: 'row', width: 'full', justifyContent: 'center', gap: 1 }}>
              <Chip 
                label="Done" 
                onClick={() => setFilterTasks('done')} 
                className="mt-3" 
                sx={{ fontWeight: 'bold' }}
                color={filter == 'done' ? 'success' : 'default'}
              />
              <Chip 
                label="Doing" 
                onClick={() => setFilterTasks('doing')} 
                className="mt-3" 
                sx={{ fontWeight: 'bold' }} 
                color={filter == 'doing' ? 'warning' : 'default'}

              />
              <Chip 
                label="To Do" 
                onClick={() => setFilterTasks('todo')}  // Updated filter value to match expected state
                className="mt-3" 
                sx={{ fontWeight: 'bold' }} 
                color={filter == 'todo' ? 'error' : 'default'}

              />
            </Box>

</Box>

          {/* Task Cards */}
        <TasksGrid filter={filter} />
        </Box>
      </Container>
    </Box>
  );
};

export default AppLayout;