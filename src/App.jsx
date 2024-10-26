import { ListItemText, Typography, Container, Box, Drawer, List, ListItemButton, ListItemIcon } from '@mui/material';
import TaskForm from './components/TaskForm';
import SideMenu from './components/SideMenu';
import Tasks from './components/Tasks';


const AppLayout = () => {
  const drawerWidth = 300; // Define the width of the drawer

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', height: '100vh' }}>
      {/* Permanent Drawer */}
      <SideMenu />

      {/* Main Content Area */}
      <Container
        sx={{
          flexGrow: 1,
          ml: `${drawerWidth}px`,  // Ensure the container is offset by the drawer width
          mt: 10,  // Top margin to avoid overlapping with AppBar
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box>
          
        </Box>
        {/* <TaskForm /> */}
        {/* <Tasks /> */}
      </Container>
    </Box>
  );
};

export default AppLayout;
