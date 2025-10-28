import * as React from 'react';
import { Box, Typography, Avatar, Divider, Rating, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Home, Category, Info, Phone } from '@mui/icons-material';

// ضع الصورة في مجلد src/assets
// import articleImage from '../assets/article-image.jpg'; // استبدل بالصورة التي لديك

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 300,
        bgcolor: '#fff',
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      
      <Box
      sx={{boxShadow: '-4px 4px 10px rgba(0, 0, 0, 0.1)',borderRadius:'10px'}}
      >
        {/* الصورة */}
      <Avatar variant="square" alt="Article Image" src={"/Images/r1.png"} sx={{ width: '100%', height: "auto", marginBottom: 2 }} />
      <Box sx={{p:'10px'}}>
        
      {/* العنوان */}
      <Typography  color="primary" sx={{ marginBottom: 1 ,fontSize:'16px',fontWeight:'600' }}>
        اساسيات تطوير تطبيقات الهاتف
      </Typography>

      {/* الوصف */}
      <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2,textAlign:'justify' }}>
        في هذا المقال ستتعلم أساسيات تطوير تطبيقات الهاتف حيث تكون تطبيقات الهاتف من نوعين...
      </Typography>

      {/* تقييم المقال */}
      <Rating name="read-only" value={4} readOnly sx={{ marginBottom: 2 }} />

      {/* التاريخ */}
      <Typography variant="caption" color="textSecondary" sx={{ marginBottom: 2 }}>
        18/10/2025
      </Typography>
      </Box>
      </Box>


    
    </Box>
  );
}
