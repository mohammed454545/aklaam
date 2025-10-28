import * as React from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';

export default function SignUp() {
  const [formData, setFormData] = React.useState({
    profileImage: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // يمكنك إضافة منطق التحقق من البيانات هنا
    console.log(formData);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: '0 auto',
        padding: 3,
        bgcolor: '#fff',
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        إنشاء حساب
      </Typography>
      
      <form onSubmit={handleSubmit}>
        {/* رابط صورة الملف الشخصي */}
        <TextField
          label="رابط صورة الملف الشخصي"
          variant="outlined"
          fullWidth
          name="profileImage"
          value={formData.profileImage}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />
        
        {/* الاسم */}
        <TextField
          label="الاسم"
          variant="outlined"
          fullWidth
          name="name"
          value={formData.name}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />
        
        {/* البريد الإلكتروني */}
        <TextField
          label="البريد الإلكتروني"
          variant="outlined"
          fullWidth
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />

        {/* كلمة المرور */}
        <TextField
          label="كلمة المرور"
          variant="outlined"
          fullWidth
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />

        {/* تأكيد كلمة المرور */}
        <TextField
          label="تأكيد كلمة المرور"
          variant="outlined"
          fullWidth
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />

        {/* الوصف */}
        <TextField
          label="الوصف"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          name="description"
          value={formData.description}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />

        {/* زر إنشاء الحساب */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ padding: '10px' }}
        >
          إنشاء حساب
        </Button>
      </form>
    </Box>
  );
}
