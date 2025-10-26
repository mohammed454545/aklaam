// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: { main: '#6f2dbd' },   // بنفسجي لطيف
    secondary: { main: '#22c55e' }, // أخضر للّمسات إن احتجت
  },
  typography: {
    fontFamily: `"Tajawal","Cairo","Noto Kufi Arabic", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
  },
});

export default theme;
