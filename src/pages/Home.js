import React from 'react';
import { Box, Container, Typography, Grid, Button, Card, CardMedia, CardContent } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import '../customCarouselStyles.css'; // Custom CSS for carousel
import images from '../utils/loadImages'; // Import the images object

const featuredHotels = [
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

const locations = [
  {
    image: images['location1.jpg'],
    name: 'Paris',
    location: 'France',
    description: 'Discover the romance of Paris with our exclusive hotel options.',
  },
  {
    image: images['location2.jpg'],
    name: 'Malibu',
    location: 'USA',
    description: 'Enjoy the sunny beaches and luxurious resorts in Malibu.',
  },
  {
    image: images['location3.jpg'],
    name: 'Malibu',
    location: 'USA',
    description: 'Enjoy the sunny beaches and luxurious resorts in Malibu.',
  },
  // Add more locations as needed
];

const testimonials = [
    {
      quote: "Buz Hotels provided an exceptional experience during our stay. The service was top-notch and the locations were perfect. Highly recommend!",
      name: "John Doe",
    },
    {
      quote: "Amazing stay at Buz Hotels. The ambiance was fantastic and the staff were extremely welcoming. Would love to visit again!",
      name: "Jane Smith",
    },
    {
      quote: "The best hotel experience I've ever had. The rooms were luxurious, and the food was absolutely delicious!",
      name: "Michael Johnson",
    },
    // Add more testimonials as needed
];

const Home = () => {
  return (
    <div>
      <Navbar />

      <Box sx={{ mb: 8 }}>
      
      {/* Carousel Section */}
      <Box sx={{ backgroundColor: '#F5F5F5', pb: 4 }}>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows
          interval={5000}
        >
          {featuredHotels.map((hotel, index) => (
            <div key={index} style={{ position: 'relative', height: '45vh', overflow: 'hidden' }}>
            <CardMedia
                component="img"
                alt={hotel.name}
                image={hotel.image}
                sx={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                }}
            />
            <CardContent
                sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'rgba(0,0,0,0.5)',
                color: '#fff',
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                }}
            >
                <Typography variant="h6">{hotel.name}</Typography>
                <Typography variant="body2">{hotel.location}</Typography>
                <Typography variant="body1">{hotel.description}</Typography>
            </CardContent>
            </div>

          ))}
        </Carousel>
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '40vh',
        //   backgroundColor: '#C1B49A',
          color: '#3B2D24',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: 2, // Add padding for small screens
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}
        >
          Welcome to Buz and Socials Reservations
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{ mb: 4, maxWidth: '600px', fontSize: { xs: '1rem', sm: '1.25rem' } }}
        >
          Your gateway to the best hotel experiences around the world.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#3B2D24',
            color: '#C1B49A',
            padding: '10px 20px',
          }}
        >
          Explore Now
        </Button>
      </Box>
    </Box>

      {/* Explore Locations Section */}
      <Container maxWidth="lg" sx={{ mb: 8, backgroundColor: '#F0EBE3', py: 4, borderRadius: '8px' }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
          Explore Locations
        </Typography>
        <Grid container spacing={4}>
          {locations.map((location, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ borderRadius: '8px', overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  alt={location.name}
                  image={location.image}
                  sx={{ height: '200px', objectFit: 'cover' }}
                />
                <CardContent sx={{ backgroundColor: '#D9D2C5', color: '#3B2D24' }}>
                  <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                    {location.name}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {location.location}
                  </Typography>
                  <Typography variant="body1">{location.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box
      sx={{
        backgroundColor: '#C1B49A',
        py: 8,
        textAlign: 'center',
        position: 'relative', // Ensure position relative for indicator positioning
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        What Our Guests Say
      </Typography>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows
        interval={5000}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = {
            marginLeft: 8,
            color: '#FFF',
            cursor: 'pointer',
            fontSize: '20px', // Adjust the size of the dots
          };
          const style = isSelected
            ? { ...defStyle, color: '#3B2D24' }
            : { ...defStyle };
          return (
            <span
              style={style}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
              key={index}
            >
              ●
            </span>
          );
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            sx={{
              maxWidth: '600px',
              mx: 'auto',
              px: 2,
              py: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="body1" sx={{ mb: 2, color: '#FFF' }}>
              "{testimonial.quote}"
            </Typography>
            <Typography variant="subtitle1" component="p" sx={{ fontStyle: 'italic', color: '#FFF' }}>
              - {testimonial.name}
            </Typography>
          </Box>
        ))}
      </Carousel>
    </Box>

      {/* Newsletter Subscription Section */}
      <Box
        sx={{
          backgroundColor: '#4E3827',
          color: '#e4e2dd',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Stay Updated
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Subscribe to our newsletter for the latest deals and updates.
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: '#C1B49A', color: '#4E3827' }}>
          Subscribe Now
        </Button>
      </Box>

      <Footer />
    </div>
  );
};

export default Home;
