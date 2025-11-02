import * as React from 'react';
import { Box } from '@mui/material';
import SafePage from '../components/SafePage';
import Sidebar from '../components/Sidebar';
import ArticleList from '../components/ArticleList';

export default function Home() {
  return (
    <SafePage maxWidth="lg">
      <Box dir="rtl"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 3, md: 4 },
          alignItems: 'stretch',
          width: '100%',
        }}
      >
        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 0' }, minWidth: 0 }}>
          <ArticleList />
        </Box>
        <Box sx={{ flex: { xs: '1 1 100%', md: '0 0 320px' }, minWidth: 0 }}>
          <Sidebar />
        </Box>
      </Box>
    </SafePage>
  );
}
