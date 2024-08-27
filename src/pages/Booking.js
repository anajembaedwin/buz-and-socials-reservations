import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <Navbar />
      <Box 
        sx={{ 
          minHeight: 'calc(100vh - 160px)', 
          padding: '40px 20px', 
          backgroundColor: '#f9f9f9' 
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
            Booking Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Check-In Date"
                  name="checkIn"
                  type="date"
                  value={formData.checkIn}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  fullWidth
                  label="Check-Out Date"
                  name="checkOut"
                  type="date"
                  value={formData.checkOut}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  fullWidth
                  label="Room Type"
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
            </Grid>
            <Box mt={4} textAlign="center">
              <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                sx={{ backgroundColor: '#4E3827', '&:hover': { backgroundColor: '#3b2d20' } }}
              >
                Book Now
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
      <Footer />
    </div>
  );
};

export default Booking;
