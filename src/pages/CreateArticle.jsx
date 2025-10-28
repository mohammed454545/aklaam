import * as React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

export default function CreateArticle() {
  const [formData, setFormData] = React.useState({
    title: '',
    content: '',
    category: '',
    image: '',
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
    console.log(formData);
  };

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 3, bgcolor: '#fff', borderRadius: 2, boxShadow: 2 }}>
      <Typography variant="h4" gutterBottom>
        إنشاء مقال جديد
      </Typography>

      <form onSubmit={handleSubmit}>
        {/* عنوان المقال */}
        <TextField
          label="عنوان المقال"
          variant="outlined"
          fullWidth
          name="title"
          value={formData.title}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />

        {/* رابط الصورة الرئيسية */}
        <TextField
          label="رابط الصورة الرئيسية"
          variant="outlined"
          fullWidth
          name="image"
          value={formData.image}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />

        {/* الفئة */}
        <TextField
          label="الفئة"
          variant="outlined"
          fullWidth
          name="category"
          value={formData.category}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />

        {/* محتوى المقال */}
        <TextField
          label="المحتوى"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          name="content"
          value={formData.content}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />

        {/* زر إرسال المقال */}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          نشر المقال
        </Button>
      </form>
    </Box>
  );
}
