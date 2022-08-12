import {
  Close,
  Group,
  Home,
  Logout,
  Person,
  PersonAdd,
  Settings,
} from '@mui/icons-material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'

import React, { useState } from 'react'

import { useStateContext } from '../contextApi/ContextProvide'
const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext()

  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <Paper>
      <Box
        flex={1}
        sx={{
          display: { xs: 'none', sm: 'block' },
          boxShadow: 3,
          height: '100vh',
          width: '240px',
        }}
      >
        <Stack>
          <Box p={4}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Typography fontWeight={400} variant="h6">
                IDEA
              </Typography>
              <Close
                sx={{ cursor: 'pointer' }}
                onClick={(e) => setActiveMenu(!activeMenu)}
              />
            </Stack>
          </Box>

          <Box position="relative">
            <List>
              <Link to="/">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Home />
                    </ListItemIcon>
                    <ListItemText primary="Homepage" />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Link to="/studentList">
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Group />
                    </ListItemIcon>
                    <ListItemText primary="Students" />
                  </ListItemButton>
                </ListItem>
              </Link>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Person />
                  </ListItemIcon>
                  <ListItemText primary="Officers" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <Settings />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Link to="/importStudent">
                    <List disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <PersonAdd />
                        </ListItemIcon>
                        <ListItemText primary="Import Student" />
                      </ListItemButton>
                    </List>
                  </Link>
                  <List disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <PersonAdd />
                      </ListItemIcon>
                      <ListItemText primary="Add Officer" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Logout />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Box>
    </Paper>
  )
}

export default Sidebar
