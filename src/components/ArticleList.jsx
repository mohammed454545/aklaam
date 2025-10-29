import * as React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Rating, Chip, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom'; // استخدام Link من react-router-dom

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
  {
    id: 3,
    title: 'كيفية بناء واجهات مستخدم مبتكرة',
    description: 'نصائح وأدوات لإنشاء واجهات مستخدم حديثة وجميلة باستخدام أدوات تطوير الويب.',
    date: '22/10/2025',
    image: '/path/to/image.jpg', // استبدل بالمسار الصحيح للصورة
    category: 'برامج',
    rating: 3,
  },
];

export default function ArticleList() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* شريط البحث وزر إنشاء مقال */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <TextField
        
          variant="outlined"
          size="small"
          placeholder="بحث..."
          sx={{ width: 300 ,border:'none',outline:'nobe' ,borderRadius:'10px',boxShadow: '-4px 4px 10px rgba(0, 0, 0, 0.1)' }}
        />
        <Link to="/create-article" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            color="secondary"
            
            sx={{
              color:'white',
              fontWeight:'600',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            إضافة مقال
          </Button>
        </Link>
      </Box>

      {/* عرض المقالات */}
      {articles.map((article) => (
        <Card key={article.id} sx={{position:'relative', display: 'flex', flexDirection: 'row', boxShadow: '-4px 4px 10px rgba(0, 0, 0, 0.1)' ,borderRadius:'10px'}}>
          <CardMedia
            component="img"
            sx={{ width: "250px", height: "100%" }}
            image={'/Images/r1.png'}
            alt={article.title}
          />
          <Box sx={{ flex: 1, paddingLeft: 2 }}>
            <Typography variant="h6" color="primary" gutterBottom>
              <Link to={`/article/${article.id}`} style={{ textDecoration: 'none', color: '#6f2dbd' }}>
                {article.title}
              </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
              {article.description}
            </Typography>
            <Box sx={{position:'absolute',width:'60%',bottom:'10px',right:'5%',display:'flex',justifyContent:'space-between'}}>
              <Typography variant="caption" color="textSecondary">
              {article.date}
            </Typography>
              <Rating name="read-only" value={article.rating} readOnly  />
            
            <Chip label={article.category} color="primary" size="small"  />
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  );
}
