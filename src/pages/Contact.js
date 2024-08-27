import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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
    console.log('Contact form data submitted:', formData);
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
            Contact Us
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={6}
                  value={formData.message}
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
                Send Message
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
      <Footer />
    </div>
  );
};

export default Contact;



// import React, { useState } from 'react';
// import { Container, Typography, Box, TextField, Button, Grid } from '@mui/material';
// // import Navbar from '../components/Navbar';
// // import Footer from '../components/Footer';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Contact form data submitted:', formData);
//   };

//   return (
//     <div>
//       {/* <Navbar /> */}
//       <Box 
//         sx={{ 
//           minHeight: 'calc(100vh - 160px)', 
//           padding: '40px 20px', 
//           backgroundColor: '#f9f9f9' 
//         }}
//       >
//         <Container maxWidth="md">
//           <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
//             Contact Us
//           </Typography>
//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={4}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   variant="outlined"
//                   margin="normal"
//                 />
//                 <TextField
//                   fullWidth
//                   label="Email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   variant="outlined"
//                   margin="normal"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Message"
//                   name="message"
//                   multiline
//                   rows={6}
//                   value={formData.message}
//                   onChange={handleChange}
//                   variant="outlined"
//                   margin="normal"
//                 />
//               </Grid>
//             </Grid>
//             <Box mt={4} textAlign="center">
//               <Button type="submit" variant="contained" color="primary">
//                 Send Message
//               </Button>
//             </Box>
//           </form>
//         </Container>
//       </Box>
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default Contact;
