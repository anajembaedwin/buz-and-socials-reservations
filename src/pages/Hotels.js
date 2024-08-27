import React, { useState } from 'react';
import { Container, Typography, Box, Grid, TextField, InputAdornment } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HotelCard from '../components/HotelCard';
import SearchIcon from '@mui/icons-material/Search';
import images from '../utils/loadImages'; // Import the images object

const hotels = [
  {
    image: images['hotel1.jpg'],
    name: 'Hotel Luxury',
    location: 'Paris, France',
    description: 'Experience the luxury and elegance of Paris at this five-star hotel.',
  },
  {
    image: images['hotel2.jpg'],
    name: 'Beach Resort',
    location: 'Malibu, USA',
    description: 'Relax by the beach at this exclusive resort with stunning ocean views.',
  },
  {
    image: images['hotel3.jpg'],
    name: 'Beach Resort',
    location: 'Malibu, USA',
    description: 'Relax by the beach at this exclusive resort with stunning ocean views.',
  },
  {
    image: images['hotel1.jpg'],
    name: 'Hotel Luxury',
    location: 'Paris, France',
    description: 'Experience the luxury and elegance of Paris at this five-star hotel.',
  },
  {
    image: images['hotel2.jpg'],
    name: 'Beach Resort',
    location: 'Malibu, USA',
    description: 'Relax by the beach at this exclusive resort with stunning ocean views.',
  },
  {
    image: images['hotel3.jpg'],
    name: 'Beach Resort',
    location: 'Malibu, USA',
    description: 'Relax by the beach at this exclusive resort with stunning ocean views.',
  },
  {
    image: images['hotel1.jpg'],
    name: 'Hotel Luxury',
    location: 'Paris, France',
    description: 'Experience the luxury and elegance of Paris at this five-star hotel.',
  },
  {
    image: images['hotel2.jpg'],
    name: 'Beach Resort',
    location: 'Malibu, USA',
    description: 'Relax by the beach at this exclusive resort with stunning ocean views.',
  },
  {
    image: images['hotel3.jpg'],
    name: 'Beach Resort',
    location: 'Malibu, USA',
    description: 'Relax by the beach at this exclusive resort with stunning ocean views.',
  },
  // Add more featured hotels as needed
];

const Hotels = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(searchTerm) ||
    hotel.location.toLowerCase().includes(searchTerm)
  );

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
              Discover Our Hotels
            </Typography>
            <Typography variant="h6" component="p">
              Find the perfect place to stay for your next trip.
            </Typography>
          </Box>

          {/* Search Bar */}
          <TextField
            fullWidth
            label="Search Hotels"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 4 }}
          />

          {/* Hotels List */}
          <Grid container spacing={4}>
            {filteredHotels.length > 0 ? (
              filteredHotels.map((hotel, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <HotelCard
                    image={hotel.image}
                    name={hotel.name}
                    location={hotel.location}
                    description={hotel.description}
                  />
                </Grid>
              ))
            ) : (
              <Typography variant="h6" component="p" sx={{ textAlign: 'center', width: '100%' }}>
                No hotels found matching your criteria.
              </Typography>
            )}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </div>
  );
};

export default Hotels;
