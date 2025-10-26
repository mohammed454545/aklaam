import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

// عدّل المسار لو شعارك مختلف
// import logo from '../assets/logo.png';

export default function TopAppBar() {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        bgcolor: '#fff',
        // خط سفلي خفيف + ظل داخلي (يشبه الصورة)
        borderBottom: '1px solid #eee',
        boxShadow: 'inset 0 -1px 0 rgba(0,0,0,0.04)',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Toolbar disableGutters sx={{ minHeight: 56, display: 'flex', justifyContent: 'space-between' }}>
          {/* الشعار (يمين في RTL) */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              component="img"
              // src={logo}
              alt="Aklaam Logo"
              sx={{ height: 32, width: 'auto', display: 'block' }}
            />
          </Box>

          {/* الروابط (يسار في RTL) */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Link
              href="#signup"
              underline="none"
              sx={{
                color: 'primary.main',
                fontWeight: 500,
                '&:hover': { color: 'primary.dark' },
              }}
            >
              إنشاء حساب
            </Link>
            <Link
              href="#signin"
              underline="none"
              sx={{
                color: 'text.secondary',
                '&:hover': { color: 'primary.main' },
              }}
            >
              تسجيل الدخول
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
