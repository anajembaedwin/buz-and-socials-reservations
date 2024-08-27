import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
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
          {/* Hero Section */}
          <Box 
            sx={{ 
              textAlign: 'center', 
              mb: 6, 
              py: 6, 
              backgroundColor: '#e4e2dd', 
              color: '#4E3827', //#4E3827
              borderRadius: 2 
            }}
          >
            <Typography variant="h3" component="h1" gutterBottom>
              About Buz Hotels
            </Typography>
            <Typography variant="h6" component="p">
              Your gateway to the best hotel experiences around the world.
            </Typography>
          </Box>

          {/* Mission Statement */}
          <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            At Buz Hotels, we aim to provide an exceptional hotel booking experience. Our platform offers a wide range of accommodations, from luxury resorts to budget-friendly stays, ensuring that every traveler finds the perfect place to stay.
          </Typography>

          {/* Our Story */}
          <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
            Our Story
          </Typography>
          <Typography variant="body1" paragraph>
            Founded by a team of travel enthusiasts, Buz Hotels was born out of a desire to simplify hotel bookings while maintaining high standards of service. Over the years, we have built strong relationships with hotels worldwide, offering our customers exclusive deals and unbeatable reliability.
          </Typography>
          <Typography variant="body1" paragraph>
            Our journey began with a simple goal: to make hotel booking as enjoyable as the trip itself. We continue to innovate and improve our services, guided by the feedback of our valued customers.
          </Typography>

          {/* Call to Action */}
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="h5" gutterBottom>
              Ready to Plan Your Next Trip?
            </Typography>
            <Button variant="contained" color="primary" sx={{ backgroundColor: '#e4e2dd', color: '#4E3827' }}>
              Explore Hotels
            </Button>
          </Box>
        </Container>
      </Box>
      <Footer />
    </div>
  );
};

export default About;
