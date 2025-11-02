import * as React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Chip,
  Button,
  TextField,
  Stack,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: 'اساسيات تطوير تطبيقات الهاتف',
    description:
      'في هذا المقال ستتعلم أساسيات تطوير تطبيقات الهاتف حيث تكون تطبيقات الهاتف من نوعين...',
    date: '18/10/2025',
    image: '/Images/r1.png',
    category: 'تقنية',
    rating: 4,
  },
  {
    id: 2,
    title: 'تطوير التطبيقات الحديثة',
    description:
      'هذا المقال يشرح كيف يمكن تطوير التطبيقات الحديثة باستخدام أحدث التقنيات...',
    date: '20/10/2025',
    image: '/Images/r1.png',
    category: 'ألعاب',
    rating: 5,
  },
  {
    id: 3,
    title: 'كيفية بناء واجهات مستخدم مبتكرة',
    description:
      'نصائح وأدوات لإنشاء واجهات مستخدم حديثة وجميلة باستخدام أدوات تطوير الويب.',
    date: '22/10/2025',
    image: '/Images/r1.png',
    category: 'برامج',
    rating: 3,
  },
];

export default function ArticleList() {
  return (
    <Box dir="rtl" sx={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
      {/* شريط البحث وزر إنشاء مقال */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        sx={{
          justifyContent: 'space-between',
          alignItems: { xs: 'stretch', sm: 'center' },
        }}
      >
        <TextField
          variant="outlined"
          size="small"
          placeholder="بحث..."
          fullWidth
          sx={{
            maxWidth: { sm: 360 },
            borderRadius: '10px',
            boxShadow: '-4px 4px 10px rgba(0,0,0,0.08)',
            '& .MuiOutlinedInput-root': { borderRadius: '10px' },
          }}
        />
        <Button
          component={RouterLink}
          to="/create-article"
          variant="contained"
          color="secondary"
          fullWidth
          sx={{
            maxWidth: { sm: 220 },
            color: 'white',
            fontWeight: 600,
            borderRadius: '12px',
            py: 1.2,
          }}
        >
          إضافة مقال
        </Button>
      </Stack>

      {/* عرض المقالات */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {articles.map((article) => (
          <Card
            key={article.id}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              borderRadius: '12px',
              boxShadow: '-4px 4px 10px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              width: '100%',
              minWidth: 0,
            }}
          >
            <CardMedia
              component="img"
              image={article.image}
              alt={article.title}
              loading="lazy"
              sx={{
                width: { xs: '100%', sm: 260 },
                height: { xs: 180, sm: 'auto' },
                objectFit: 'cover',
                flexShrink: 0,
              }}
            />

            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1.25, flex: 1, minWidth: 0 }}>
              <Typography
                component={RouterLink}
                to={`/article/${article.id}`}
                variant="h6"
                sx={{
                  color: 'primary.main',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                {article.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: { xs: 3, sm: 2 },
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {article.description}
              </Typography>

              {/* تذييل الكارد */}
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1.5}
                alignItems={{ xs: 'flex-start', sm: 'center' }}
                justifyContent="space-between"
                sx={{ mt: 'auto' }}
              >
                <Typography variant="caption" color="text.secondary">
                  {article.date}
                </Typography>

                <Rating name={`rating-${article.id}`} value={article.rating} readOnly size="small" />

                <Chip
                  label={article.category}
                  color="primary"
                  variant="outlined"
                  size="small"
                  sx={{ alignSelf: { xs: 'flex-start', sm: 'center' } }}
                />
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
