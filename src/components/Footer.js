import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#4E3827',
        color: '#e4e2dd',
        padding: '20px 0',
        width: '100%',
        position: 'relative',
        bottom: 0,
        left: 0,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ justifyContent: 'space-between' }}>
          {/* About Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              Buz Hotels is committed to providing the best hotel booking experience.
              Explore a wide range of hotels and make reservations with ease.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" variant="body2" display="block" underline="none">
              Home
            </Link>
            <Link href="/about" color="inherit" variant="body2" display="block" underline="none">
              About
            </Link>
            <Link href="/hotels" color="inherit" variant="body2" display="block" underline="none">
              Hotels
            </Link>
            <Link href="/regions" color="inherit" variant="body2" display="block" underline="none">
              Regions
            </Link>
            <Link href="/contact" color="inherit" variant="body2" display="block" underline="none">
              Contact
            </Link>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: <Link href="mailto:info@buzhotels.com" color="inherit" underline="hover">info@buzhotels.com</Link>
            </Typography>
            <Typography variant="body2">
              Phone: +123 456 7890
            </Typography>
            <Typography variant="body2">
              Address: 123 Hotel Lane, City, Country
            </Typography>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box textAlign="center" mt={4}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Buz Hotels. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
