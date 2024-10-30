import { Container, Box } from '@mui/material';
import SideMenu from './components/SideMenu';
import TodoActionButton from './components/TodoActionButton';
import { useState } from 'react';
import CreateTaskModal from './components/CreateTaskModal';
import TasksGrid from './components/TasksGrid';
import TaskDetailsDialog from './components/TaskDetailsDialog';
import { useDispatch, useSelector } from 'react-redux';
import { clearSelectedTask, setTaskToEdit } from './features/tasks/tasksSlice';

const AppLayout = () => {
  const dispatch = useDispatch();
  const drawerWidth = 300; // Define the width of the drawer
  const [formOpen, setFormOpen] = useState(false);
  const task = useSelector((state) => state.tasks.selectedTask);
  const taskToEdit = useSelector((state) => state.tasks.taskToEdit);

  // Handlers for opening and closing the dialog
  const handleClickOpen = () => {
    setFormOpen(true);
  };
  
  const handleClose = () => {
    setFormOpen(false);
    dispatch(clearSelectedTask());
    dispatch(setTaskToEdit(null));
  };

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
          ml: `${drawerWidth}px`,  // Ensure the container is offset by the drawer width
          mt: 10,  // Top margin to avoid overlapping with AppBar
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >

        {/* Add Task Button and Task Cards */}
        <Box className="flex w-full flex-col gap-5">
            <TodoActionButton
              color="green"
              textColor="#000"
              onClick={handleClickOpen}  // Open form on button click
              title="Add Task"
            />

          {/* Task Cards */}
        <TasksGrid />
        </Box>
      </Container>
    </Box>
  );
};

export default AppLayout;