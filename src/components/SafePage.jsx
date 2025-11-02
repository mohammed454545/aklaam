import * as React from 'react';
import { Box, Container } from '@mui/material';

export default function SafePage({ children, maxWidth = 'lg' }) {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <Container
        maxWidth={maxWidth}
        sx={{
          // ارتفاع TopAppBar ~70px + هامش بسيط
          pt: { xs: '90px', md: '96px' },
          // ارتفاع Footer ~60px + هامش بسيط
          pb: { xs: '80px', md: '88px' },
        }}
      >
        {children}
      </Container>
    </Box>
  );
}
