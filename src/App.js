import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
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
      <TopAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} /> {/* إضافة صفحة تسجيل الدخول */}
        <Route path="/article/:id" element={<ArticleDetail />} /> 
        <Route path="/create-article" element={<CreateArticle/>} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/users" element={<Users />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
      <FooterBar />
    </>
  );
}
