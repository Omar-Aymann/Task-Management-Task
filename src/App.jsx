import { Container, Box } from '@mui/material';
import SideMenu from './components/SideMenu';
import TodoActionButton from './components/TodoActionButton';
import { useState } from 'react';
import CreateTaskModal from './components/CreateTaskModal';
import TasksGrid from './components/TasksGrid';

const AppLayout = () => {
  const drawerWidth = 300; // Define the width of the drawer
  const [formOpen, setFormOpen] = useState(false);
  // Handlers for opening and closing the dialog
  const handleClickOpen = () => {
    setFormOpen(true);
  };
  
  const handleClose = () => {
    setFormOpen(false);
  };


  return (
    <Box sx={{ flexGrow: 1, display: 'flex', height: '100vh' }}>
      {/* Permanent Drawer */}
      <SideMenu />
      <CreateTaskModal open={formOpen} handleClose={handleClose} />
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