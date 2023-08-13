import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import Image from 'next/image';
import { headerTabs } from './Header';

export const MobileNavMenu = () => {
  const [isVisible, setVisible] = React.useState(false);

  const toggleDrawer =
    (isVisible: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setVisible(isVisible);
    };

  return (
    <Box sx={{ display: { sx: 'block', lg: 'none' } }}>
      <IconButton onClick={toggleDrawer(true)}>
        <Image src="/menu.svg" width={40} height={40} alt="menu" />
      </IconButton>
      <Drawer anchor={'right'} open={isVisible} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            height: '100%',
            backgroundColor: '#23222A',
            color: '#fff',
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {headerTabs.map((data) => (
              <ListItem key={data.id} disablePadding>
                <ListItemButton>
                  <ListItemText primary={data.value} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
