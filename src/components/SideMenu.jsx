import { ListItemText, Typography, Drawer, List, ListItemButton, ListItemIcon } from '@mui/material';
import ChecklistIcon from '@mui/icons-material/Checklist';
import AddIcon from '@mui/icons-material/Add';
const SideMenu = () => {
  const drawerWidth = 300; // Define the width of the drawer

    return (
        <Drawer
        variant='permanent'
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {/* Drawer Content */}
        <Typography variant="h6" sx={{ p: 2 }}>
          Task Management App
        </Typography>
        {/* You can add more drawer items here */}
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ChecklistIcon />
            </ListItemIcon>
            <ListItemText>Tasks</ListItemText>
            </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText>New Task</ListItemText>
            </ListItemButton>
        </List>
      </Drawer>
    );
}
export default SideMenu;