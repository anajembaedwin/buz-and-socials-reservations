import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const HotelCard = ({ image, name, location, description }) => {
  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        boxShadow: 3, 
        backgroundColor: '#f5f5f5', 
        borderRadius: 2, 
        overflow: 'hidden',
        '&:hover': {
          boxShadow: 6,
        }
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={name}
        sx={{ 
          objectFit: 'cover',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {location}
        </Typography>
        <Box mt={1}>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default HotelCard;
