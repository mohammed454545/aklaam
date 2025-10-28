import * as React from 'react';
import Sidebar from '../components/Sidebar'; // تأكد من أنك أنشأت هذا الملف
import ArticleList from '../components/ArticleList'; // تأكد من أنك أنشأت هذا الملف
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* الشريط الجانبي */}
      <Sidebar />

      {/* المحتوى الرئيسي */}
      <Box >
        {/* قائمة المقالات */}
        <ArticleList />
      </Box>
    </Box>
  );
}
