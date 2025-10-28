import * as React from 'react';
import { Box, Typography, Card, CardMedia, Rating, TextField, Button, Divider } from '@mui/material';
import { useParams } from 'react-router-dom'; // لاستخراج المعاملات من المسار

// نموذج للمقالات (يمكنك استبداله ببيانات حقيقية من API أو قاعدة بيانات)
const articles = [
  {
    id: 1,
    title: 'اساسيات تطوير تطبيقات الهاتف',
    description: 'في هذا المقال ستتعلم أساسيات تطوير تطبيقات الهاتف حيث تكون تطبيقات الهاتف من نوعين...',
    date: '18/10/2025',
    image: '/path/to/image.jpg', // استبدل بالمسار الصحيح للصورة
    category: 'تقنية',
    rating: 4,
  },
  {
    id: 2,
    title: 'تطوير التطبيقات الحديثة',
    description: 'هذا المقال يشرح كيف يمكن تطوير التطبيقات الحديثة باستخدام أحدث التقنيات...',
    date: '20/10/2025',
    image: '/path/to/image.jpg', // استبدل بالمسار الصحيح للصورة
    category: 'ألعاب',
    rating: 5,
  },
];

export default function ArticleDetail() {
  const { id } = useParams(); // استخراج المعرف من المسار
  const article = articles.find((a) => a.id === parseInt(id));

  const [rating, setRating] = React.useState(article?.rating || 0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <Box sx={{ maxWidth: 800, margin: '0 auto', padding: 3, bgcolor: '#fff', borderRadius: 2, boxShadow: 2 }}>
      <Typography variant="h4" gutterBottom>
        {article?.title}
      </Typography>

      <Card sx={{ display: 'flex', marginBottom: 2 }}>
        <CardMedia
          component="img"
          sx={{ width: 150, height: 100, objectFit: 'cover' }}
          image={article?.image}
          alt={article?.title}
        />
        <Box sx={{ flex: 1, paddingLeft: 2 }}>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 1 }}>
            {article?.category} | {article?.date}
          </Typography>

          {/* التقييم القابل للتعديل */}
          <Rating
            name="article-rating"
            value={rating}
            onChange={(event, newValue) => handleRatingChange(newValue)}
            sx={{ marginBottom: 2 }}
          />
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1">{article?.description}</Typography>
        </Box>
      </Card>

      {/* تعليق المستخدم (اختياري) */}
      <TextField
        label="أضف تعليقك"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" sx={{ padding: '10px' }}>
        إضافة تعليق
      </Button>
    </Box>
  );
}
