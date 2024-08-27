import React from 'react';
import { AppBar, Toolbar, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/buzlogo2-rm-bg.png'; // Path to your logo

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#4E3827',
  height: '64px',
  boxShadow: 'none',
  width: '100%',
  margin: 0, // Ensure no extra margin around the AppBar
});

const LogoImage = styled('img')({
  height: '100px',
  marginRight: '10px',
});

const ToolbarContainer = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 16px',
});

const NavLinks = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
});

const NavLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
  fontWeight: 'bold', // Optional: Make the text bold
  '&:hover': {
    color: '#e4e2dd', // Change color on hover
  },
});

const Navbar = () => {
  return (
    <StyledAppBar position="static">
      <ToolbarContainer>
        <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
          <LogoImage src={Logo} alt="Buz Logo" />
        </Typography>
         <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
           <NavLink component={Link} to="/">Home</NavLink>
           <NavLink component={Link} to="/about">About</NavLink>
           <NavLink component={Link} to="/hotels">Hotels</NavLink>
           <NavLink component={Link} to="/regions">Regions</NavLink>
           <NavLink component={Link} to="/booking">Booking</NavLink>
           <NavLink component={Link} to="/contact">Contact</NavLink>
         </div>
      </ToolbarContainer>
    </StyledAppBar>
  );
};

export default Navbar;




// import React, { useState } from 'react';
// import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, styled } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link, useNavigate } from 'react-router-dom';
// import Logo from '../assets/buzlogo2-rm-bg.png'; // Path to your logo

// // Styled components using @mui/material's styled API
// const StyledAppBar = styled(AppBar)({
//   backgroundColor: '#4E3827', // Dark brown color for the header
//   height: '64px',
//   boxShadow: 'none', // Remove shadow for a cleaner look
// });

// const LogoImage = styled('img')({
//   height: '40px',
//   marginRight: '10px',
// });

// const ToolbarContainer = styled(Toolbar)({
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   padding: '0 16px',
// });

// const NavLink = styled(Typography)({
//   color: 'inherit',
//   textDecoration: 'none',
//   padding: '8px 16px',
//   '&:hover': {
//     textDecoration: 'underline',
//   },
// });

// const Navbar = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const isMenuOpen = Boolean(anchorEl);
//   const navigate = useNavigate(); // Initialize navigate for programmatic navigation

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleSignOut = () => {
//     // Implement your sign-out logic here
//     navigate('/'); // Redirect to the Sign In page
//     handleMenuClose();
//   };

//   return (
//     <StyledAppBar position="static">
//       <ToolbarContainer>
//         {/* Logo */}
//         <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
//           <LogoImage src={Logo} alt="Buz Logo" />
//           Buz Hotels
//         </Typography>

//         {/* Navigation Links */}
//         <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
//           <NavLink component={Link} to="/">Home</NavLink>
//           <NavLink component={Link} to="/about">About</NavLink>
//           <NavLink component={Link} to="/hotels">Hotels</NavLink>
//           <NavLink component={Link} to="/regions">Regions</NavLink>
//           <NavLink component={Link} to="/booking">Booking</NavLink>
//           <NavLink component={Link} to="/contact">Contact</NavLink>
//         </div>

//         {/* Menu Icon for smaller screens */}
//         <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { xs: 'block', md: 'none' } }} onClick={handleMenuOpen}>
//           <MenuIcon />
//         </IconButton>

//         {/* Profile Menu */}
//         <Menu
//           anchorEl={anchorEl}
//           anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//           keepMounted
//           transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//           open={Boolean(anchorEl)}
//           onClose={handleMenuClose}
//         >
//           <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
//         </Menu>
//       </ToolbarContainer>
//     </StyledAppBar>
//   );
// };

// export default Navbar;




// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <AppBar position="static" sx={{ backgroundColor: '#4E3827', width: '100%', boxShadow: 'none' }}>
//       <Toolbar sx={{ justifyContent: 'space-between', paddingX: { xs: 2, sm: 4 } }}>
//         {/* Menu Icon for smaller screens */}
//         <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { xs: 'block', md: 'none' } }}>
//           <MenuIcon />
//         </IconButton>

//         {/* Logo or Title */}
//         <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
//           <img src="/buzlogo-brown.jpg" alt="Buz Logo" style={{ height: '40px', marginRight: '10px' }} />
//           Buz Hotels
//         </Typography>

//         {/* Navigation Links */}
//         <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
//           <Button color="inherit" component={Link} to="/">
//             Home
//           </Button>
//           <Button color="inherit" component={Link} to="/about">
//             About
//           </Button>
//           <Button color="inherit" component={Link} to="/hotels">
//             Hotels
//           </Button>
//           <Button color="inherit" component={Link} to="/regions">
//             Regions
//           </Button>
//           <Button color="inherit" component={Link} to="/booking">
//             Booking
//           </Button>
//           <Button color="inherit" component={Link} to="/contact">
//             Contact
//           </Button>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
