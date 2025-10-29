import * as React from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Rating,
  TextField,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from '@mui/material';
import { useParams } from 'react-router-dom';

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
    comments: [
      { id: 101, author: 'أحمد', date: '19/10/2025', rating: 4, content: 'مقال رائع وواضح جدًا. أحببت أمثلة الأدوات المقترحة ✨' },
      { id: 102, author: 'سارة', date: '20/10/2025', rating: 5, content: 'أضفتوه للمفضلة، نحتاج جزء ثاني عن الاختبارات والتوزيع 👏' }
    ]
  },
];

export default function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id, 10));
  const [rating, setRating] = React.useState(article?.rating || 0);
  const getInitial = (name = '') => (name.trim() ? name.trim()[0] : '?');

  if (!article) {
    return (
      <Box sx={{ maxWidth: 800, m: '0 auto', p: 3 }}>
        <Typography>لم يتم العثور على المقال.</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{

        display: 'flex',
        flexWrap:'wrap',   // عمودي على الشاشات الصغيرة
        gap: { xs: 2, md: 3 },
        width: '100%',
        maxWidth: 1200,
        mx: 'auto',
        my:   '140px',
        px: { xs: 1.5, sm: 2 },
        bgcolor: '#fff',
      }}
    >
      {/* بطاقة المقال */}
      <Card
        sx={{
          flex: '1 1 0',
          borderRadius: 2,
          boxShadow: '-4px 4px 10px rgba(0,0,0,0.1)',
          minHeight: { md: 600 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexDirection: { xs: 'column', sm: 'row' }, // الصورة فوق في XS، يمين في SM+
            p: { xs: 1.5, md: 2 },
          }}
        >
          <CardMedia
            component="img"
            image={article.image}
            alt={article.title}
            sx={{
              width: { xs: '100%', sm: 200 },
              height:   'auto' ,
              objectFit: 'cover',
              borderRadius: 2,
            }}
          />
          <Box sx={{ flex: 1, pl: { sm: 2 } }}>
            <Typography variant="h5" gutterBottom>{article.title}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {article.category} | {article.date}
            </Typography>
            <Rating
              name="article-rating"
              value={rating}
              onChange={(_, v) => setRating(v || 0)}
              sx={{ mb: 2 }}
            />
          </Box>
        </Box>

        <Box sx={{ p: { xs: 1.5, md: 2 } }}>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1">{article.description}</Typography>
        </Box>
      </Card>

      {/* بطاقة التعليقات */}
      <Box
        sx={{
          position: 'relative',
          flex: { xs: '1 1 100%', md: '0 0 380px' },   // عمود جانبي في الشاشات المتوسطة+
          boxShadow: '-4px 4px 10px rgba(0,0,0,0.1)',
          p: { xs: 2, md: 3 },
          borderRadius: 2,
          pb: { xs: 2, md: '96px' },                  // مساحة لمدخل التعليق عندما يكون مثبتًا بالأسفل
          bgcolor: '#fff',
        }}
      >
        <Typography variant="h6" sx={{ mt: 0.5, mb: 1 }}>
          التعليقات ({article.comments?.length ?? 0})
        </Typography>

        {article.comments?.length ? (
          <List disablePadding>
            {article.comments.map((c, idx) => (
              <React.Fragment key={c.id}>
                <ListItem alignItems="flex-start" sx={{ px: 0 }}>
                  <ListItemAvatar sx={{ minWidth: 48 }}>
                    <Avatar>{getInitial(c.author)}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                        <Typography variant="subtitle2">{c.author}</Typography>
                        <Typography variant="caption" color="text.secondary">{c.date}</Typography>
                        {typeof c.rating === 'number' && (
                          <Rating value={c.rating} readOnly size="small" sx={{ ml: 0.5 }} />
                        )}
                      </Box>
                    }
                    secondary={
                      <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap', mt: 0.5 }}>
                        {c.content}
                      </Typography>
                    }
                  />
                </ListItem>
                {idx < article.comments.length - 1 && <Divider component="li" sx={{ my: 1 }} />}
              </React.Fragment>
            ))}
          </List>
        ) : (
          <Typography variant="body2" color="text.secondary">لا توجد تعليقات بعد.</Typography>
        )}

        <Divider sx={{ my: 2 }} />

        {/* إدخال التعليق: مطلق بأسفل في الشاشات الكبيرة، عادي في الصغيرة */}
        <Box
          sx={{
            position: { xs: 'static', md: 'absolute' },
            bottom: 10,
            right: { md: '5%' },
            width: { xs: '100%', md: '90%' },
            display: 'flex',
            gap: 1,
            alignItems: 'center',
            mt: { xs: 1, md: 0 },
          }}
        >
          <TextField
            label="أضف تعليقك"
            variant="outlined"
            fullWidth
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{ color: 'white', fontWeight: 600, width: { xs: 'auto', md: 155 }, height: 54 }}
          >
            إضافة تعليق
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
