import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import HotelCard from './HotelCard';

const LocationSection = ({ locations }) => {
  return (
    <Box sx={{ padding: '40px 20px', backgroundColor: '#fff3e0' }}>
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom 
        sx={{ 
          textAlign: 'center', 
          mb: 4, 
          fontWeight: 'bold',
          color: '#4E3827',
        }}
      >
        Explore Our Destinations
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {locations.map((location, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <HotelCard
              image={location.image}
              name={location.name}
              location={location.location}
              description={location.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LocationSection;
