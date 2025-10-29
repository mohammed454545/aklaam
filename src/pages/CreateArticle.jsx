import * as React from 'react';
import { Box, TextField, Button, Typography, MenuItem } from '@mui/material';
import SendRounded from '@mui/icons-material/SendRounded';
import SimpleRichText from '../components/SimpleRichText';

const CATEGORY_OPTIONS = ['تقنية', 'ألعاب', 'برامج', 'أخبار', 'تعليم'];

export default function CreateArticle() {
  const [formData, setFormData] = React.useState({
    title: '',
    category: '',
    image: '',
  });
  const [contentHtml, setContentHtml] = React.useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formData, content: contentHtml };
    console.log('Submit payload:', payload);
    // TODO: API call
  };

  return (
    <Box
      sx={{
        maxWidth: 1100,
        mx: 'auto',
        p: 2,
        my:'140px'
      }}
    >


      <form onSubmit={handleSubmit}>
        {/* الصف العلوي: عنوان + فئة + زر الإرسال يسار */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            mb: 2,
            flexWrap: 'wrap',
          }}
        >
          {/* مجموعة الحقول (يمين→يسار في RTL) */}
          <Box sx={{ display: 'flex', gap: 2, flex: 1, minWidth: 300, flexWrap: 'wrap' }}>
            <TextField
              label="عنوان المقال"
              variant="outlined"
              name="title"
              value={formData.title}
              onChange={handleChange}
              sx={{ flex: '1 1 280px' }}
            />

            {/* الفئة كقائمة منسدلة */}
            <TextField
              label="الفئة"
              variant="outlined"
              name="category"
              value={formData.category}
              onChange={handleChange}
              select
              sx={{ flex: '1 1 220px', minWidth: 220 }}
            >
              {CATEGORY_OPTIONS.map((opt) => (
                <MenuItem key={opt} value={opt}>
                  {opt}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          {/* زر الإرسال أقصى اليسار (آخر عنصر في RTL) */}
          <Button
            type="submit"
            variant="contained"
            color="success"
            // startIcon={<SendRounded />}
            sx={{  height:'55px'}}
            aria-label="نشر المقال"
            title="نشر المقال"
          >نشر</Button>
        </Box>

        {/* السطر الثاني: رابط الصورة بالكامل */}
        <TextField
          label="رابط الصورة الرئيسية"
          variant="outlined"
          fullWidth
          name="image"
          value={formData.image}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        {/* السطر الثالث: المحتوى بعرض كامل */}
        <SimpleRichText
          value={contentHtml}
          onChange={setContentHtml}
        />
      </form>
    </Box>
  );
}
