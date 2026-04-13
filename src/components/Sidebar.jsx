import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Toolbar } from '@mui/material';

import {Dashboard, People,ShoppingCart} from '@mui/icons-material'
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div>
      <Drawer variant='permanent' sx={{width:240,flexShrink:0}}>
        <Toolbar/>
        <List>
          <ListItem button  component={Link} to='/'>
            <ListItemIcon>
              <Dashboard/>
            </ListItemIcon>
            <ListItemText primary='Dashboard'></ListItemText>
          </ListItem>
          <ListItem button  component={Link} to='/users'>
            <ListItemIcon>
              <People/>
            </ListItemIcon>
            <ListItemText primary='Users'></ListItemText>
          </ListItem>
          <ListItem button  component={Link} to='/products'>
            <ListItemIcon>
              <ShoppingCart/>
            </ListItemIcon>
            <ListItemText primary='Products'></ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}
