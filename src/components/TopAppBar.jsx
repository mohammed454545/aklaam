import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';  // لإظهار أيقونة القائمة المنسدلة
import CategoryIcon from '@mui/icons-material/Category';
import CommentIcon from '@mui/icons-material/Comment';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function TopAppBar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const logo = '/Images/logo.png';

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        px: '5%',
        bgcolor: '#fff',
        borderBottom: '2px solid #eee',
        boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Toolbar disableGutters sx={{ minHeight: 70, display: 'flex', justifyContent: 'space-between' }}>
        
        {/* الشعار يظهر فقط في الشاشات الكبيرة */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 4 }}>
          <Box
            component="img"
            src={logo}
            alt="Aklaam Logo"
            sx={{ height: 55, width: 'auto', display: 'block' }}
          />
        </Box>

        {/* زر القائمة المنسدلة في الشاشات الصغيرة */}
        <IconButton
          size="large"
          color="inherit"
          onClick={toggleDrawer}
          sx={{ display: { xs: 'flex', sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* الروابط في الشاشات الكبيرة */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 4 }}>
          <Link
            to="/categories"
            style={{
              color: '#6f2dbd',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            الفئات
          </Link>
          <Link
            to="/comments"
            style={{
              color: '#6f2dbd',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            التعليقات
          </Link>
          <Link
            to="/users"
            style={{
              color: '#6f2dbd',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            المستخدمين
          </Link>
          <Link
            to="/statistics"
            style={{
              color: '#6f2dbd',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            الإحصائيات
          </Link>
        </Box>

        {/* الروابط في الشاشات الصغيرة */}
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center', gap: 4 }}>
          <Link
            to="/signup"
            style={{
              color: '#6f2dbd',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            إنشاء حساب
          </Link>
          <Link
            to="/login"
            style={{
              color: '#6f2dbd',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            تسجيل الدخول
          </Link>
        </Box>

      </Toolbar>

      {/* Drawer للموبايل */}
      <Drawer
        
        open={openDrawer}
        onClose={toggleDrawer}
      >
        <Box sx={{ width: 250, padding: 2 }}>
          {/* الشعار في Drawer */}
          <Box component="img" src={logo} alt="Aklaam Logo" sx={{ height: 50, width: 'auto', display: 'block', marginBottom: 2 }} />
          
          <List>
            <ListItem button component={Link} to="/categories">
              <CategoryIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="الفئات" />
            </ListItem>
            <ListItem button component={Link} to="/comments">
              <CommentIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="التعليقات" />
            </ListItem>
            <ListItem button component={Link} to="/users">
              <PeopleIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="المستخدمين" />
            </ListItem>
            <ListItem button component={Link} to="/statistics">
              <BarChartIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="الإحصائيات" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
