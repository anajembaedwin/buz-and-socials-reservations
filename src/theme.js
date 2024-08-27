import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4E3827', // Brown color
    },
    secondary: {
      main: '#e4e2dd', // Lighter color for contrast
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
