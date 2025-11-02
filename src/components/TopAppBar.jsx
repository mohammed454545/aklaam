import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CategoryIcon from '@mui/icons-material/Category';
import CommentIcon from '@mui/icons-material/Comment';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function TopAppBar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const toggleDrawer = () => setOpenDrawer(v => !v);
  const logo = '/Images/logo.png';

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        top: 0,
        left: 0,
        right: 0,
        width: '100%',              // مهم: لا 100vw
        bgcolor: '#fff',
        borderBottom: '1px solid #eee',
        boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
        overflowX: 'hidden',        // حماية إضافية
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: 70,
          width: '100%',
          maxWidth: 1200,
          mx: 'auto',
          px: { xs: 2, sm: 3 },     // انقل الـpadding هنا بدل AppBar
          display: 'flex',
          justifyContent: 'space-between',
          overflowX: 'hidden',
        }}
      >
        {/* زر القائمة للموبايل */}
        <IconButton
          size="large"
          color="inherit"
          onClick={toggleDrawer}
          sx={{ display: { xs: 'flex', sm: 'none' } }}
          aria-label="فتح القائمة"
        >
          <MenuIcon />
        </IconButton>

        {/* روابط الديسكتوب + الشعار */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 4, minWidth: 0 }}>
          <Link to="/">
            <Box component="img" src={logo} alt="Aklaam" sx={{ height: 52, display: 'block' }} />
          </Link>
          <Link to="/categories" style={{ color: '#6f2dbd', fontWeight: 500, textDecoration: 'none' }}>الفئات</Link>
          <Link to="/comments"   style={{ color: '#6f2dbd', fontWeight: 500, textDecoration: 'none' }}>التعليقات</Link>
          <Link to="/users"      style={{ color: '#6f2dbd', fontWeight: 500, textDecoration: 'none' }}>المستخدمين</Link>
          <Link to="/statistics" style={{ color: '#6f2dbd', fontWeight: 500, textDecoration: 'none' }}>الإحصائيات</Link>
        </Box>

        {/* روابط يمين (تسجيل/دخول) — تظل ظاهرة دائمًا */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
          <Link to="/signup" style={{ color: '#6f2dbd', fontWeight: 500, textDecoration: 'none' }}>إنشاء حساب</Link>
          <Link to="/login"  style={{ color: '#6f2dbd', fontWeight: 500, textDecoration: 'none' }}>تسجيل الدخول</Link>
        </Box>
      </Toolbar>

      {/* Drawer للموبايل */}
      <Drawer
        open={openDrawer}
        onClose={toggleDrawer}
        anchor="left"
        PaperProps={{
          sx: {
            width: 260,
            maxWidth: '100vw',   // لا يتجاوز عرض الشاشة
            overflowX: 'hidden',
          },
        }}
      >
        <Box sx={{ width: '100%', p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Link to="/">
            <Box component="img" src={logo} alt="Aklaam" sx={{ height: 52, display: 'block' }} />
          </Link>
          <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <ListItem button component={Link} to="/categories" onClick={toggleDrawer}>
              <CategoryIcon sx={{ mr: 1.5 }} /><ListItemText primary="الفئات" />
            </ListItem>
            <ListItem button component={Link} to="/comments" onClick={toggleDrawer}>
              <CommentIcon sx={{ mr: 1.5 }} /><ListItemText primary="التعليقات" />
            </ListItem>
            <ListItem button component={Link} to="/users" onClick={toggleDrawer}>
              <PeopleIcon sx={{ mr: 1.5 }} /><ListItemText primary="المستخدمين" />
            </ListItem>
            <ListItem button component={Link} to="/statistics" onClick={toggleDrawer}>
              <BarChartIcon sx={{ mr: 1.5 }} /><ListItemText primary="الإحصائيات" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
