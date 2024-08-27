import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LocationSection from '../components/LocationSection';
import images from '../utils/loadImages'; // Import the images object

const regions = [
  {
    image: images['europe.jpg'],
    name: 'Europe',
    location: 'Various Locations',
    description: 'Explore the historic cities and beautiful landscapes of Europe.'
  },
  {
    image: images['north-america.jpg'],
    name: 'North America',
    location: 'Various Locations',
    description: 'Discover the diverse cities and natural wonders of North America.'
  },
  {
    image: images['asia.jpg'],
    name: 'Asia',
    location: 'Various Locations',
    description: 'Experience the vibrant cultures and breathtaking sights of Asia.'
  },
  {
    image: images['europe.jpg'],
    name: 'Europe',
    location: 'Various Locations',
    description: 'Explore the historic cities and beautiful landscapes of Europe.'
  },
  {
    image: images['north-america.jpg'],
    name: 'North America',
    location: 'Various Locations',
    description: 'Discover the diverse cities and natural wonders of North America.'
  },
  {
    image: images['asia.jpg'],
    name: 'Asia',
    location: 'Various Locations',
    description: 'Experience the vibrant cultures and breathtaking sights of Asia.'
  },
  {
    image: images['europe.jpg'],
    name: 'Europe',
    location: 'Various Locations',
    description: 'Explore the historic cities and beautiful landscapes of Europe.'
  },
  {
    image: images['north-america.jpg'],
    name: 'North America',
    location: 'Various Locations',
    description: 'Discover the diverse cities and natural wonders of North America.'
  },
  {
    image: images['asia.jpg'],
    name: 'Asia',
    location: 'Various Locations',
    description: 'Experience the vibrant cultures and breathtaking sights of Asia.'
  },
  // Add more regions as needed
];

const Regions = () => {
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
        <Container maxWidth="lg">
          {/* Hero Section */}
          <Box 
            sx={{ 
              textAlign: 'center', 
              mb: 8, 
              py: 6, 
              backgroundColor: '#e4e2dd', 
              color: '#4E3827', //#4E3827
              borderRadius: 2 
            }}
          >
            <Typography variant="h3" component="h1" gutterBottom>
              Discover Our Regions
            </Typography>
            <Typography variant="h6" component="p">
              From historic cities to natural wonders, explore the best regions around the world.
            </Typography>
          </Box>

          {/* Introduction Section */}
          <Typography variant="h6" component="p" paragraph sx={{ mb: 4 }}>
            Discover our wide range of destinations across the globe. Whether you're looking for a city getaway, a relaxing beach vacation, or an adventurous mountain retreat, we have something for everyone.
          </Typography>

          {/* Regions List */}
          <LocationSection locations={regions} />
        </Container>
      </Box>
      <Footer />
    </div>
  );
};

export default Regions;
