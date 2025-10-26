import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

// ضع أيقونة تيك توك كصورة SVG داخل هذا المسار
// import tiktokIcon from '../assets/tiktok.svg';

export default function FooterBar() {
  return (
    <AppBar
      component="footer"
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        bgcolor: '#fff',
        borderTop: '1px solid #eee',
        boxShadow: 'inset 0 1px 0 rgba(0,0,0,0.04)',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        {/* في RTL، أول عنصر يظهر يميناً. وضعنا النص أولاً ليكون يميناً، ثم الأيقونات لتظهر يساراً */}
        <Toolbar disableGutters sx={{ minHeight: 56, display: 'flex', justifyContent: 'space-between' }}>
          {/* النص/الرابط على اليمين */}
          <Link
            href="#vision"
            underline="none"
            sx={{ color: 'primary.main', fontWeight: 500, '&:hover': { color: 'primary.dark' } }}
          >
            اقلام حرة نحو مستقبل أفضل
          </Link>

          {/* الأيقونات على اليسار */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <IconButton
              aria-label="Instagram"
              href="https://instagram.com/"
              target="_blank"
              rel="noopener"
              size="small"
              sx={{ color: 'primary.main', '&:hover': { color: 'primary.dark' } }}
            >
              <InstagramIcon />
            </IconButton>

            <IconButton
              aria-label="Facebook"
              href="https://facebook.com/"
              target="_blank"
              rel="noopener"
              size="small"
              sx={{ color: 'primary.main', '&:hover': { color: 'primary.dark' } }}
            >
              <FacebookIcon />
            </IconButton>

            <IconButton
              aria-label="TikTok"
              href="https://tiktok.com/"
              target="_blank"
              rel="noopener"
              size="small"
              sx={{ color: 'primary.main' }}
            >
              {/* إن كانت صورة SVG أحادية اللون يمكنك تلوينها عبر fill في الملف نفسه */}
              {/* <Box component="img" src={tiktokIcon} alt="TikTok" sx={{ height: 22, width: 22, display: 'block' }} /> */}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
