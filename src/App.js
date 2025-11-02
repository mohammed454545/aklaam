import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline, GlobalStyles, Box } from '@mui/material';

import TopAppBar from './components/TopAppBar';
import FooterBar from './components/FooterBar';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ArticleDetail from './pages/ArticleDetail';
import CreateArticle from './pages/CreateArticle';
import Categories from './pages/Categories';
import Comments from './pages/Comments';
import Users from './pages/Users';
import Statistics from './pages/Statistics';

export default function App() {
  return (
    <>
      {/* طبقة أساس + نمط عالمي لمنع أي Overflow أفقي */}
      <CssBaseline />
      <GlobalStyles
        styles={{
          '*, *::before, *::after': { boxSizing: 'border-box' },
          'html, body, #root': { maxWidth: '100%', overflowX: 'hidden' },
          // لا تستخدم 100vw لعناصر الحواف لأنّه يسبب سكرول أفقي
          img: { maxWidth: '100%', height: 'auto', display: 'block' },
          'video, canvas, svg': { maxWidth: '100%' },
        }}
      />

      <TopAppBar />

      {/* منطقة المحتوى — padding علوي/سفلي لحماية المحتوى من الهيدر/الفوتر المثبتين */}
      <Box
        component="main"
        dir="rtl"
        sx={{
          width: '100%',
          maxWidth: 1200,
          mx: 'auto',
          px: { xs: 2, sm: 3 },            // هوامش جانبية مرنة
          pt: { xs: '90px', md: '96px' },  // يعادل ارتفاع الهيدر + هامش بسيط
          pb: { xs: '80px', md: '88px' },  // يعادل ارتفاع الفوتر + هامش بسيط
          overflowX: 'hidden',              // طبقة أمان إضافية
          display: 'block',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/create-article" element={<CreateArticle />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/users" element={<Users />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </Box>

      <FooterBar />
    </>
  );
}
