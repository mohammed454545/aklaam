import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function FooterBar() {
  return (
    <AppBar component="footer" position="fixed" sx={{
      top: 'auto', bottom: 0, px: { xs: 2, sm: '5%' }, height:'60px',
      bgcolor: '#fff', borderTop: '1px solid #eee', boxShadow: '0 -4px 10px rgba(0,0,0,0.06)',
      zIndex: (t) => t.zIndex.appBar,
    }}>
      <Toolbar disableGutters sx={{ minHeight: 56, display: 'flex', justifyContent: 'space-between' }}>
        <Link href="#vision" underline="none" sx={{ color: 'primary.main', fontWeight: 600, '&:hover': { color: 'primary.dark' } }}>
          اقلام حرة نحو مستقبل أفضل
        </Link>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <IconButton aria-label="Instagram" href="https://instagram.com/" target="_blank" rel="noopener">
            <InstagramIcon />
          </IconButton>
          <IconButton aria-label="Facebook" href="https://facebook.com/" target="_blank" rel="noopener">
            <FacebookIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
