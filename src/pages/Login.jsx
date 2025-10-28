import * as React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

export default function Login() {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
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
    // منطق التحقق من البيانات أو إرسالها إلى الخادم
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
        تسجيل الدخول
      </Typography>

      <form onSubmit={handleSubmit}>
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

        {/* زر تسجيل الدخول */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ padding: '10px' }}
        >
          تسجيل الدخول
        </Button>
      </form>
    </Box>
  );
}
