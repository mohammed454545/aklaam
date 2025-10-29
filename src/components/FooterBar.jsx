import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


export default function FooterBar() {
  return (
    <AppBar
      component="footer"

        sx={{
    position: 'fixed',
    inset: 'auto 0 0 0',             // تعادل: top:auto; right:0; bottom:0; left:0
    px: '5%',
    height:'60px',
    justifyItems:'center',
    bgcolor: '#fff',
    borderTop: '1px solid #eee',
    boxShadow: '0 -4px 4px rgba(0,0,0,0.1)',
    zIndex: (t) => t.zIndex.appBar + 1,
  }}
    >
      
        {/* في RTL، أول عنصر يظهر يميناً. وضعنا النص أولاً ليكون يميناً، ثم الأيقونات لتظهر يساراً */}
        <Toolbar disableGutters sx={{ minHeight: 56, display: 'flex', justifyContent: 'space-between' }}>
          {/* النص/الرابط على اليمين */}
          <Link
            href="#vision"
            underline="none"
            sx={{ color: 'primary.main', fontWeight: 600, '&:hover': { color: 'primary.dark' } }}
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

          </Box>
        </Toolbar>

    </AppBar>
  );
}
