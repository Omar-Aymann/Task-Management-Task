import {  Container, Box } from '@mui/material';
import SideMenu from './components/SideMenu';
import TodoActionButton from './components/TodoActionButton';
import TaskCard from './components/TaskCard';


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
        }}
      >
        <Box className="flex w-full flex-row justify-between gap-5 ">
          <Box className="flex flex-col gap-2 grow">
            <TodoActionButton  textColor="#000" title="To-Do" />
            <Box className="flex flex-col gap-4">
              <TaskCard />

            </Box>
          </Box>
          <Box className="flex flex-col gap-2 grow">
            <TodoActionButton  textColor="#000" title="In Progress" />
            <Box className="flex flex-col gap-4">
              <TaskCard />

            </Box>

          </Box>
          <Box className="flex flex-col gap-2 grow">
            <TodoActionButton  textColor="#000" title="Completed" />
            <Box className="flex flex-col gap-4">
              <TaskCard />

            </Box>

          </Box>
        </Box>
        {/* <TaskForm /> */}
        {/* <Tasks /> */}
      </Container>
    </Box>
  );
};

export default AppLayout;
