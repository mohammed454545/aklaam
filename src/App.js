import * as React from 'react';
import TopAppBar from './components/TopAppBar';
import FooterBar from './components/FooterBar';
import Box from '@mui/material/Box';

export default function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopAppBar />
      {/* محتوى الصفحات */}
      <Box sx={{ flex: 1 }}>
        {/* ... */}
      </Box>
      <FooterBar />
    </Box>
  );
}
