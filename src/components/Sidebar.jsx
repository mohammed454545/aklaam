import * as React from 'react';
import { Box, Typography, Avatar, Divider, Rating, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Home, Category, Info, Phone } from '@mui/icons-material';

// ضع الصورة في مجلد src/assets
// import articleImage from '../assets/article-image.jpg'; // استبدل بالصورة التي لديك

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 250,
        bgcolor: '#f5f5f5',
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        height: '100vh',
        boxShadow: 3, // لإضافة ظل خفيف للشريط الجانبي
      }}
    >
      {/* الصورة */}
      {/* <Avatar alt="Article Image" src={articleImage} sx={{ width: 80, height: 80, marginBottom: 2 }} /> */}

      {/* العنوان */}
      <Typography variant="h6" color="primary" sx={{ marginBottom: 1 }}>
        اساسيات تطوير تطبيقات الهاتف
      </Typography>

      {/* الوصف */}
      <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
        في هذا المقال ستتعلم أساسيات تطوير تطبيقات الهاتف حيث تكون تطبيقات الهاتف من نوعين...
      </Typography>

      {/* تقييم المقال */}
      <Rating name="read-only" value={4} readOnly sx={{ marginBottom: 2 }} />

      {/* التاريخ */}
      <Typography variant="caption" color="textSecondary" sx={{ marginBottom: 2 }}>
        18/10/2025
      </Typography>

      <Divider sx={{ my: 2 }} />

      {/* القوائم الجانبية */}
      <List>
        <ListItem button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="الرئيسية" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Category />
          </ListItemIcon>
          <ListItemText primary="الفئات" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Info />
          </ListItemIcon>
          <ListItemText primary="عن التطبيق" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Phone />
          </ListItemIcon>
          <ListItemText primary="اتصل بنا" />
        </ListItem>
      </List>
    </Box>
  );
}
