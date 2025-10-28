// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: '"Tajawal", "Roboto", "Arial", sans-serif',
  },
  palette: {
    primary: {
      main: '#6f2dbd', // البنفسجي المستخدم عندك
    },
    secondary: {
      main: '#4caf50',
    },
  },

});

export default theme;
