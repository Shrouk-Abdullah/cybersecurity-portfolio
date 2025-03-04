'use client';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Sent! (Here you can add a real backend)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box
      sx={{ p: 5, textAlign: 'center', background: '#1A1A1A', color: 'white' }}
    >
      <Typography variant='h4' fontWeight='bold' gutterBottom>
        Contact <span style={{ color: '#00C6FF' }}>Us</span>
      </Typography>
      <Typography variant='body1' sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
        Have a project or security concerns? Let's talk! Reach out via email,
        phone, or send us a message below.
      </Typography>

      <Grid container spacing={3} justifyContent='center'>
        {/* Contact Details */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              background: '#121212',
              color: 'white',
              textAlign: 'center',
              p: 2,
              transition: '0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 4px 20px rgba(0, 255, 255, 0.3)',
              },
            }}
          >
            <CardContent>
              <EmailIcon sx={{ fontSize: 40, color: '#00C6FF', mb: 1 }} />
              <Typography variant='h6' fontWeight='bold'>
                Email
              </Typography>
              <Typography variant='body2'>
                shroukabdullah537@gmail.com
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              background: '#121212',
              color: 'white',
              textAlign: 'center',
              p: 2,
              transition: '0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 4px 20px rgba(0, 255, 255, 0.3)',
              },
            }}
          >
            <CardContent>
              <PhoneIcon sx={{ fontSize: 40, color: '#00C6FF', mb: 1 }} />
              <Typography variant='h6' fontWeight='bold'>
                Phone
              </Typography>
              <Typography variant='body2'>+201221246385</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              background: '#121212',
              color: 'white',
              textAlign: 'center',
              p: 2,
              transition: '0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 4px 20px rgba(0, 255, 255, 0.3)',
              },
            }}
          >
            <CardContent>
              <LocationOnIcon sx={{ fontSize: 40, color: '#00C6FF', mb: 1 }} />
              <Typography variant='h6' fontWeight='bold'>
                Location
              </Typography>
              <Typography variant='body2'>Egypt</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Contact Form */}
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 600,
          mx: 'auto',
          mt: 4,
          p: 3,
          background: '#121212',
          borderRadius: '10px',
          boxShadow: '0 4px 20px rgba(0, 255, 255, 0.3)',
        }}
      >
        <TextField
          fullWidth
          label='Your Name'
          name='name'
          variant='outlined'
          sx={{
            mb: 2,
            background: '#F5F5F5',
            borderRadius: '5px',
            input: { color: '#333' },
            label: { color: '#666' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#888' },
              '&:hover fieldset': { borderColor: '#555' },
              '&.Mui-focused fieldset': {
                borderColor: '#00A3CC',
                boxShadow: '0 0 8px #00A3CC',
              },
            },
          }}
          value={formData.name}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          label='Your Email'
          name='email'
          type='email'
          variant='outlined'
          sx={{
            mb: 2,
            background: '#F5F5F5',
            borderRadius: '5px',
            input: { color: '#333' },
            label: { color: '#666' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#888' },
              '&:hover fieldset': { borderColor: '#555' },
              '&.Mui-focused fieldset': {
                borderColor: '#00A3CC',
                boxShadow: '0 0 8px #00A3CC',
              },
            },
          }}
          value={formData.email}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          label='Your Message'
          name='message'
          variant='outlined'
          multiline
          rows={4}
          sx={{
            mb: 2,
            background: '#F5F5F5',
            borderRadius: '5px',
            input: { color: '#333' },
            label: { color: '#666' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#888' },
              '&:hover fieldset': { borderColor: '#555' },
              '&.Mui-focused fieldset': {
                borderColor: '#00A3CC',
                boxShadow: '0 0 8px #00A3CC',
              },
            },
          }}
          value={formData.message}
          onChange={handleChange}
        />

        <Button
          type='submit'
          variant='contained'
          endIcon={<SendIcon />}
          sx={{
            background: '#00C6FF',
            color: 'black',
            '&:hover': { background: '#00A3CC' },
          }}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
}
