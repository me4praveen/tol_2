import { red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
  palette: {
    mode: "light",
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides:{
        h6: {
          fontSize: '16px'
        }
      }
    },
    MuiAppBar : {
      styleOverrides: {
        root: {
          background: "#091963"
        }
      }
    }
  },
  typography: {
    
  }
});

export default responsiveFontSizes(theme);