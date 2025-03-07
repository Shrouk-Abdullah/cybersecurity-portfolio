'use client';
import { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  ListItemButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SecurityIcon from '@mui/icons-material/Security';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';

export default function Hero() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // Fix hydration error

  useEffect(() => {
    setIsClient(true); // Ensures rendering happens only on the client
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleScroll = (id) => {
    if (isClient) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      {/* Top Navbar */}
      <AppBar
        // position='sticky'
        sx={{
          background: 'rgba(0, 0, 0, 0.5)', // Glassmorphism effect
          backdropFilter: 'blur(10px)',
          // boxShadow: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          width: '90vw',
          position: 'fixed',
          // margin: 'auto',
          left: '5%',
          right: '5%',
          borderRadius: '20px',
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0,
          // top: 0,
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <Box display='flex' alignItems='center'>
            <SecurityIcon sx={{ fontSize: 30, color: '#00C6FF', mr: 1 }} />
            <Typography
              variant='h6'
              fontWeight='bold'
              sx={{
                background: 'linear-gradient(to right, #00C6FF, #00FFB3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: "'Orbitron', sans-serif",
                textShadow: '0px 0px 8px rgba(0, 198, 255, 0.5)',
              }}
            >
              SHROUK
            </Typography>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                color='inherit'
                onClick={() => handleScroll(item.id)}
                sx={{
                  mx: 1,
                  transition: '0.3s',
                  '&:hover': {
                    color: '#00C6FF',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
            {/* <Button
              variant='contained'
              sx={{
                backgroundColor: '#00C6FF',
                color: '#0F2027',
                // fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#009ACD',
                },
                width: { xs: '100%', sm: 'auto' }, // Full width on mobile
              }}
              startIcon={<ShieldOutlinedIcon />}
            >
              Services
            </Button> */}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            edge='end'
            color='inherit'
            aria-label='menu'
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer anchor='right' open={mobileOpen} onClose={handleDrawerToggle}>
        <List
          sx={{
            width: 250,
            background: '#121212',
            height: '100%',
            color: 'white',
          }}
        >
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => {
                  handleScroll(item.id);
                  handleDrawerToggle();
                }}
              >
                <ListItemText primary={item.label} sx={{ color: 'white' }} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton onClick={handleDrawerToggle}>
              <Button
                variant='contained'
                sx={{ backgroundColor: '#00C6FF', color: '#0F2027' }}
                fullWidth
              >
                Get Started
              </Button>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
