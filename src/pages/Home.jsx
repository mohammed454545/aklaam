import * as React from 'react';
import Sidebar from '../components/Sidebar'; // تأكد من أنك أنشأت هذا الملف
import ArticleList from '../components/ArticleList'; // تأكد من أنك أنشأت هذا الملف
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <Box sx={{ display: 'flex',maxWidth:'1192px',width:'100%',flexWrap:'wrap',m:'auto',my:'150px',gap:'80px' }}>
      
        {/* قائمة المقالات */}
        <ArticleList />
      <Sidebar />
    </Box>
  );
}
